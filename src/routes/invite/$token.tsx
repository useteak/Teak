import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { z } from 'zod'
import { toast } from 'sonner'
import { prisma } from '@/db'
import { auth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const getData = createServerFn()
  .inputValidator(z.object({ token: z.string() }))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })

    const invitation = await prisma.organizationInvitation.findUnique({
      where: {
        token: data.token,
      },
      include: {
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    if (!invitation) {
      return {
        status: 'not_found' as const,
        user: session?.user ?? null,
      }
    }

    const now = new Date()

    if (invitation.revokedAt) {
      return {
        status: 'revoked' as const,
        user: session?.user ?? null,
        email: invitation.email,
        organization: invitation.organization,
      }
    }

    if (invitation.acceptedAt) {
      return {
        status: 'accepted' as const,
        user: session?.user ?? null,
        email: invitation.email,
        organization: invitation.organization,
      }
    }

    if (invitation.expiresAt <= now) {
      return {
        status: 'expired' as const,
        user: session?.user ?? null,
        email: invitation.email,
        organization: invitation.organization,
      }
    }

    const emailMatches =
      (session?.user.email ?? '').toLowerCase() ===
      invitation.email.toLowerCase()

    const isAlreadyMember = session
      ? Boolean(
          await prisma.organization.findFirst({
            where: {
              id: invitation.organizationId,
              users: {
                some: {
                  id: session.user.id,
                },
              },
            },
            select: { id: true },
          }),
        )
      : false

    return {
      status: 'pending' as const,
      user: session?.user ?? null,
      email: invitation.email,
      organization: invitation.organization,
      emailMatches,
      isAlreadyMember,
    }
  })

const acceptInvite = createServerFn({ method: 'POST' })
  .inputValidator(z.object({ token: z.string() }))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })

    if (!session) {
      throw new Error('Unauthorized')
    }

    const invitation = await prisma.organizationInvitation.findUnique({
      where: {
        token: data.token,
      },
    })

    if (!invitation) {
      throw new Error('Invitation not found')
    }

    const now = new Date()

    if (invitation.revokedAt) {
      throw new Error('Invitation revoked')
    }

    if (invitation.expiresAt <= now) {
      throw new Error('Invitation expired')
    }

    if (invitation.acceptedAt) {
      return {
        organizationId: invitation.organizationId,
      }
    }

    if (session.user.email.toLowerCase() !== invitation.email.toLowerCase()) {
      throw new Error('Signed-in email does not match invitation')
    }

    await prisma.$transaction(async (tx) => {
      await tx.organization.update({
        where: {
          id: invitation.organizationId,
        },
        data: {
          users: {
            connect: {
              id: session.user.id,
            },
          },
        },
      })

      await tx.organizationInvitation.update({
        where: {
          id: invitation.id,
        },
        data: {
          acceptedAt: now,
          acceptedByUserId: session.user.id,
        },
      })
    })

    return {
      organizationId: invitation.organizationId,
    }
  })

export const Route = createFileRoute('/invite/$token')({
  component: RouteComponent,
  loader: ({ params }) => getData({ data: { token: params.token } }),
})

function RouteComponent() {
  const navigate = useNavigate()
  const params = Route.useParams()
  const data = Route.useLoaderData()

  const redirectPath = `/invite/${params.token}`

  const organizationName =
    data.status === 'not_found' ? null : data.organization.name

  return (
    <div className="flex items-center justify-center h-svh">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Organization invitation</CardTitle>
          <CardDescription>
            {organizationName
              ? `Invitation to join ${organizationName}.`
              : 'Invitation details.'}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {data.status === 'not_found' ? (
            <p>This invitation link is invalid.</p>
          ) : data.status === 'revoked' ? (
            <p>This invitation was revoked.</p>
          ) : data.status === 'expired' ? (
            <p>This invitation has expired.</p>
          ) : data.status === 'accepted' ? (
            <p>This invitation has already been accepted.</p>
          ) : data.user ? (
            data.emailMatches ? (
              data.isAlreadyMember ? (
                <p>
                  You’re already a member of{' '}
                  <span className="font-medium">{data.organization.name}</span>.
                </p>
              ) : (
                <p>
                  Signed in as{' '}
                  <span className="font-medium">{data.user.email}</span>.
                </p>
              )
            ) : (
              <p>
                This invitation is for{' '}
                <span className="font-medium">{data.email}</span>, but you’re
                signed in as{' '}
                <span className="font-medium">{data.user.email}</span>.
              </p>
            )
          ) : (
            <p className="text-balance">
              Sign in or create an account for{' '}
              <span className="font-medium">{data.email}</span> to accept this
              invite.
            </p>
          )}
        </CardContent>

        <CardFooter className="justify-end gap-2">
          {data.status === 'pending' && !data.user ? (
            <>
              <Button variant="outline" asChild>
                <Link
                  to="/login"
                  search={{ redirect: redirectPath, email: data.email }}
                >
                  Log in
                </Link>
              </Button>
              <Button asChild>
                <Link
                  to="/signup"
                  search={{ redirect: redirectPath, email: data.email }}
                >
                  Create account
                </Link>
              </Button>
            </>
          ) : data.status === 'pending' && data.user && data.emailMatches ? (
            <Button
              disabled={data.isAlreadyMember}
              onClick={async () => {
                try {
                  const result = await acceptInvite({
                    data: {
                      token: params.token,
                    },
                  })

                  navigate({
                    to: '/$organizationId',
                    params: { organizationId: result.organizationId },
                  })
                } catch {
                  toast.error('Failed to accept invitation')
                }
              }}
            >
              {data.isAlreadyMember ? 'Already a member' : 'Accept invitation'}
            </Button>
          ) : (
            <Button asChild>
              <Link to={data.user ? '/' : '/login'}>Continue</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
