import { Link, createFileRoute, redirect } from '@tanstack/react-router'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { createServerFn } from '@tanstack/react-start'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { auth } from '@/lib/auth'
import { prisma } from '@/db'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const getData = createServerFn().handler(async () => {
  const session = await auth.api.getSession({
    headers: getRequestHeaders(),
  })

  const organizations = await prisma.organization.findMany({
    where: {
      users: {
        some: {
          id: session?.user.id,
        },
      },
    },
  })

  if (!organizations.length) {
    throw redirect({
      to: '/new-organization',
    })
  }

  return {
    user: session?.user,
    organizations,
  }
})

export const Route = createFileRoute('/_authenticated/')({
  component: App,
  loader: () => getData(),
})

function App() {
  // Server state
  const { organizations } = Route.useLoaderData()

  return (
    <div className="flex min-h-svh items-center justify-center">
      {organizations.length ? (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Pick a organization</CardTitle>
            <CardDescription>
              Go ahead an pick one of you're organizations to continue
            </CardDescription>
          </CardHeader>
          {organizations.map((org) => (
            <Link
              key={org.id}
              to="/$organizationId"
              params={{ organizationId: org.id }}
            >
              <CardContent className="flex items-center justify-between hover:bg-muted px-4 py-2">
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>{org.name[0]}</AvatarFallback>
                  </Avatar>
                  <p>{org.name}</p>
                </div>
                <HugeiconsIcon className="size-4" icon={ArrowRight02Icon} />
              </CardContent>
            </Link>
          ))}
        </Card>
      ) : null}
    </div>
  )
}
