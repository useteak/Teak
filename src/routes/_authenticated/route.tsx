import { Outlet, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { authMiddleware } from '@/middleware/auth'
import { auth } from '@/lib/auth'
import { prisma } from '@/db'
import AppFooter from '@/components/app-footer'

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

  return {
    user: session?.user,
    organizations,
  }
})

export const Route = createFileRoute('/_authenticated')({
  component: RouteComponent,
  loader: () => getData(),
  server: {
    middleware: [authMiddleware()],
  },
})

function RouteComponent() {
  return <Outlet />
}
