import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import * as z from 'zod'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Copy01Icon,
  Key01Icon,
  MoreHorizontalIcon,
  Tick02Icon,
  Trash,
  ViewIcon,
  ViewOffIcon,
} from '@hugeicons/core-free-icons'
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { createSeoMeta } from '@/lib/seo'

const getData = createServerFn()
  .inputValidator(z.object({ organizationId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    const organization = await prisma.organization.findUnique({
      where: {
        id: data.organizationId,
        users: { some: { id: session?.user.id } },
      },
    })

    const apiKeys = await prisma.apiKey.findMany({
      where: {
        organizationId: organization?.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return {
      apiKeys,
    }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/settings/api-keys',
)({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({ data: { organizationId: params.organizationId } }),
  head: () => ({
    meta: createSeoMeta({ title: 'API Keys' }),
  }),
})

function RouteComponent() {
  // URL state
  const params = Route.useParams()

  // Server state
  const { apiKeys } = Route.useLoaderData()

  // Local state for visibility per key
  const [visibleKeys, setVisibleKeys] = useState<Record<string, boolean>>({})
  const [copiedKeys, setCopiedKeys] = useState<Record<string, boolean>>({})

  // Handlers
  function toggleVisibility(keyId: string) {
    setVisibleKeys((prev) => ({
      ...prev,
      [keyId]: !prev[keyId],
    }))
  }

  async function copyToClipboard(keyId: string, value: string) {
    await navigator.clipboard.writeText(value)
    setCopiedKeys((prev) => ({ ...prev, [keyId]: true }))
    setTimeout(() => {
      setCopiedKeys((prev) => ({ ...prev, [keyId]: false }))
    }, 2000)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Manage API keys for your organization. These keys can be used to
            authenticate API requests.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {apiKeys.length === 0 ? (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <HugeiconsIcon icon={Key01Icon} />
                </EmptyMedia>
                <EmptyTitle>No API keys yet</EmptyTitle>
                <EmptyDescription>
                  Create an API key to authenticate requests to your
                  organization.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Label</TableHead>
                  <TableHead>Key</TableHead>
                  <TableHead className="w-[150px]">Created</TableHead>
                  <TableHead className="text-right w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.map((apiKey) => {
                  const isVisible = visibleKeys[apiKey.id]
                  const isCopied = copiedKeys[apiKey.id]

                  return (
                    <TableRow key={apiKey.id}>
                      <TableCell className="font-medium">
                        {apiKey.label}
                      </TableCell>
                      <TableCell>
                        <InputGroup className="max-w-xs">
                          <InputGroupInput
                            type={isVisible ? 'text' : 'password'}
                            value={apiKey.id}
                            readOnly
                            className="font-mono text-xs"
                          />
                          <InputGroupAddon align="inline-end">
                            <InputGroupButton
                              size="icon-xs"
                              onClick={() => toggleVisibility(apiKey.id)}
                              aria-label={isVisible ? 'Hide key' : 'Show key'}
                            >
                              <HugeiconsIcon
                                icon={isVisible ? ViewOffIcon : ViewIcon}
                              />
                            </InputGroupButton>
                            <InputGroupButton
                              size="icon-xs"
                              onClick={() =>
                                copyToClipboard(apiKey.id, apiKey.id)
                              }
                              aria-label={isCopied ? 'Copied' : 'Copy key'}
                            >
                              <HugeiconsIcon
                                icon={isCopied ? Tick02Icon : Copy01Icon}
                              />
                            </InputGroupButton>
                          </InputGroupAddon>
                        </InputGroup>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDistanceToNow(new Date(apiKey.createdAt), {
                          addSuffix: true,
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon-sm" variant="ghost">
                              <HugeiconsIcon icon={MoreHorizontalIcon} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56" align="end">
                            <DropdownMenuItem variant="destructive" asChild>
                              <Link
                                to="/$organizationId/settings/api-keys/$apiKeyId/delete"
                                params={{
                                  organizationId: params.organizationId,
                                  apiKeyId: apiKey.id,
                                }}
                              >
                                <HugeiconsIcon icon={Trash} />
                                Delete key
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
        <CardFooter className="justify-end">
          <Button asChild>
            <Link
              to="/$organizationId/settings/api-keys/new"
              params={{ organizationId: params.organizationId }}
            >
              Create API key
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Outlet />
    </>
  )
}
