import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { createAuthMiddleware, getOAuthState } from 'better-auth/api'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import { lastLoginMethod } from 'better-auth/plugins'
import { prisma } from '@/lib/database'
import { resend, resendFromEmail } from '@/lib/resend'
import { getRequiredEnv } from '@/utils/env'

const githubClientId = getRequiredEnv('GITHUB_CLIENT_ID')
const githubClientSecret = getRequiredEnv('GITHUB_CLIENT_SECRET')
const linearClientId = getRequiredEnv('LINEAR_CLIENT_ID')
const linearClientSecret = getRequiredEnv('LINEAR_CLIENT_SECRET')

function getDefaultOrganizationName(user: {
  name?: string | null
  email?: string | null
}) {
  const name = user.name?.trim()
  if (name) return name

  const emailPrefix = user.email?.split('@')[0]?.trim()
  if (emailPrefix) return emailPrefix

  return 'My Organization'
}

function isInviteCallback(urlValue?: string | null) {
  if (!urlValue) return false

  try {
    const url = new URL(urlValue, 'http://localhost')
    return url.pathname.startsWith('/invite/')
  } catch {
    return false
  }
}

/**
 * Better Auth server instance configured for Prisma and GitHub OAuth.
 */
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    async sendResetPassword({ user, url }) {
      try {
        await resend.emails.send({
          from: resendFromEmail,
          to: user.email,
          subject: 'Reset your password',
          html: `<p>Click the link below to reset your password:</p><p><a href="${url}">Reset password</a></p><p>If you didn't request this, you can safely ignore this email.</p>`,
        })
      } catch (error) {
        console.error(
          `[Auth] Failed to send password reset email to ${user.email}:`,
          error,
        )
      }
    },
  },
  socialProviders: {
    github: {
      clientId: githubClientId,
      clientSecret: githubClientSecret,
      disableImplicitSignUp: true,
      overrideUserInfoOnSignIn: true,
      mapProfileToUser: (profile) => ({
        image: profile.avatar_url,
      }),
    },
    linear: {
      clientId: linearClientId,
      clientSecret: linearClientSecret,
      disableImplicitSignUp: true,
    },
  },
  account: {
    accountLinking: {
      trustedProviders: ['github', 'linear'],
    },
  },
  plugins: [tanstackStartCookies(), lastLoginMethod()],
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      const newSession = ctx.context.newSession
      if (!newSession) return

      const isInviteSignup = await (async () => {
        if (ctx.path === '/sign-up/email') {
          return isInviteCallback(ctx.body?.callbackURL)
        }

        if (ctx.path === '/callback/:id') {
          const state = (await getOAuthState()) as
            | { callbackURL?: string; newUserURL?: string }
            | undefined

          return (
            isInviteCallback(state?.newUserURL) ||
            isInviteCallback(state?.callbackURL)
          )
        }

        return false
      })()

      if (isInviteSignup) return

      const userId = newSession.user.id

      try {
        const organizationCount = await prisma.organization.count({
          where: {
            users: {
              some: { id: userId },
            },
          },
        })

        if (organizationCount > 0) return

        const organizationName = getDefaultOrganizationName(newSession.user)

        await prisma.organization.create({
          data: {
            name: organizationName,
            users: {
              connect: {
                id: userId,
              },
            },
          },
        })
      } catch (err) {
        // Don't block auth flows if org auto-creation fails.
        console.error('Failed to auto-create organization on signup', err)
      }
    }),
  },
})
