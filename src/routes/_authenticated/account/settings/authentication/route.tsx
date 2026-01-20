import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { toast } from 'sonner'
import { z } from 'zod'
import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { MailIcon } from '@hugeicons/core-free-icons'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'
import { createSeoMeta } from '@/lib/seo'

/**
 * Provider metadata: display name and icon.
 */
const PROVIDER_META: Record<string, { label: string; icon: React.ReactNode }> =
  {
    credential: {
      label: 'Email and Password',
      icon: (
        <HugeiconsIcon
          className="text-muted-foreground translate-y-px"
          icon={MailIcon}
          size={18}
        />
      ),
    },
    github: {
      label: 'GitHub',
      icon: (
        <img
          src="/github-logo.svg"
          alt="GitHub"
          className="h-4 w-auto translate-y-px dark:invert"
        />
      ),
    },
    linear: {
      label: 'Linear',
      icon: (
        <img
          src="/linear-logo.svg"
          alt="Linear"
          className="h-4 w-auto translate-y-px dark:invert"
        />
      ),
    },
  }

/**
 * OAuth provider IDs that we display on this page.
 */
const OAUTH_PROVIDER_IDS = Object.keys(PROVIDER_META)

/**
 * Loader: fetch linked accounts for the current user.
 */
const getData = createServerFn().handler(async () => {
  const session = await auth.api.getSession({
    headers: getRequestHeaders(),
  })

  if (!session?.user) {
    return { oauthAccounts: [], totalAuthMethods: 0 }
  }

  const accounts = await prisma.account.findMany({
    where: { userId: session.user.id },
    select: { id: true, providerId: true, createdAt: true },
  })

  const oauthAccounts = accounts.filter((a) =>
    OAUTH_PROVIDER_IDS.includes(a.providerId),
  )

  return {
    oauthAccounts,
    totalAuthMethods: accounts.length,
  }
})

const unlinkProviderSchema = z.object({
  providerId: z.string().min(1),
})

/**
 * Action: unlink an OAuth provider from the current user.
 */
const unlinkProvider = createServerFn({ method: 'POST' })
  .inputValidator(unlinkProviderSchema)
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    if (!session?.user) {
      throw new Error('Unauthorized')
    }

    const userId = session.user.id

    await prisma.$transaction(async (tx) => {
      const accounts = await tx.account.findMany({
        where: { userId },
        select: { id: true, providerId: true },
      })

      if (accounts.length <= 1) {
        throw new Error('Cannot remove your last authentication method.')
      }

      const targetAccount = accounts.find(
        (a) => a.providerId === data.providerId,
      )

      if (!targetAccount) {
        throw new Error('Provider not linked.')
      }

      await tx.account.delete({
        where: { id: targetAccount.id },
      })
    })

    return { success: true }
  })

export const Route = createFileRoute(
  '/_authenticated/account/settings/authentication',
)({
  component: RouteComponent,
  loader: () => getData(),
  head: () => ({
    meta: createSeoMeta({ title: 'Authentication Settings' }),
  }),
})

function RouteComponent() {
  const { oauthAccounts, totalAuthMethods } = Route.useLoaderData()
  const router = useRouter()
  const [unlinkingId, setUnlinkingId] = useState<string | null>(null)

  const canRemove = totalAuthMethods > 1

  async function handleUnlink(providerId: string) {
    setUnlinkingId(providerId)
    try {
      await unlinkProvider({ data: { providerId } })
      toast.success('Provider removed')
      await router.invalidate()
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to remove provider'
      toast.error(message)
    } finally {
      setUnlinkingId(null)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Authentication Methods</CardTitle>
        <CardDescription>
          Manage the authentication methods for your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {oauthAccounts.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No authentication methods found.
          </p>
        ) : (
          <ul className="divide-y">
            {oauthAccounts.map((account) => {
              const meta = PROVIDER_META[account.providerId]
              const isUnlinking = unlinkingId === account.providerId

              return (
                <li
                  key={account.id}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-2.5">
                    {meta.icon}

                    <div className="space-y-1">
                      <p className="text-sm font-medium">{meta.label}</p>
                      <p className="text-xs text-muted-foreground">
                        Added on {format(account.createdAt, 'PPp')}
                      </p>
                    </div>
                  </div>

                  {canRemove && (
                    <Button
                      size="sm"
                      variant="destructive"
                      disabled={isUnlinking}
                      onClick={() => handleUnlink(account.providerId)}
                    >
                      {isUnlinking ? 'Removing…' : 'Remove'}
                    </Button>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
