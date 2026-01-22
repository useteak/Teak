import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import * as z from 'zod'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  MoreHorizontalIcon,
  Trash,
  UserMinusIcon,
} from '@hugeicons/core-free-icons'
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
import { cn } from '@/utils/classnames'
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

    const members = await prisma.user.findMany({
      where: {
        organizations: {
          some: {
            id: organization?.id,
          },
        },
      },
    })

    return {
      members,
      user: session?.user,
    }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/settings/members',
)({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({ data: { organizationId: params.organizationId } }),
  head: () => ({
    meta: createSeoMeta({ title: 'Members' }),
  }),
})

function RouteComponent() {
  // URL state
  const params = Route.useParams()

  // Server state
  const { members, user } = Route.useLoaderData()

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Organization members</CardTitle>
          <CardDescription>
            Here you can see your organization members. You can invite new
            members to your organization by clicking the invite button.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => {
                const isSelf = member.id === user?.id

                return (
                  <TableRow key={member.id}>
                    <TableCell className={cn({ 'font-medium': isSelf })}>
                      {isSelf ? 'You' : member.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {member.email}
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
                              to="/$organizationId/settings/members/$memberId/delete"
                              params={{
                                organizationId: params.organizationId,
                                memberId: member.id,
                              }}
                            >
                              <HugeiconsIcon
                                icon={isSelf ? UserMinusIcon : Trash}
                              />
                              {isSelf ? 'Leave organization' : 'Remove member'}
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
        </CardContent>
        <CardFooter className="justify-end">
          <Button asChild>
            <Link
              to="/$organizationId/settings/members/invite"
              params={{ organizationId: params.organizationId }}
            >
              Invite new member
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Outlet />
    </>
  )
}
