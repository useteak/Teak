import { Link, createFileRoute, redirect } from '@tanstack/react-router'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { createServerFn } from '@tanstack/react-start'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

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

  if (organizations.length === 1) {
    throw redirect({
      to: '/$organizationId',
      params: { organizationId: organizations[0].id },
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
        <Card className="w-full max-w-sm gap-0">
          <CardHeader className="pb-3">
            <CardTitle>Pick a organization</CardTitle>
            <CardDescription>
              Go ahead an pick one of you're organizations to continue
            </CardDescription>
          </CardHeader>
          <div className="pb-3">
            {organizations.map((org) => (
              <Link
                key={org.id}
                className="group"
                to="/$organizationId"
                params={{ organizationId: org.id }}
              >
                <CardContent className="flex items-center justify-between hover:bg-muted px-6 py-2.5">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="group-hover:bg-primary group-hover:text-primary-foreground">
                        {org.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <p>{org.name}</p>
                  </div>
                  <HugeiconsIcon
                    className="size-4 text-muted-foreground group-hover:text-foreground"
                    icon={ArrowRight02Icon}
                  />
                </CardContent>
              </Link>
            ))}
          </div>
          <CardFooter className="justify-end">
            <Button asChild>
              <Link to="/new-organization">New organization</Link>
            </Button>
          </CardFooter>
        </Card>
      ) : null}
    </div>
  )
}
