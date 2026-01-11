import { Outlet, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import * as z from 'zod'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { prisma } from '@/db'
import { auth } from '@/lib/auth'

const getData = createServerFn()
  .inputValidator(z.object({ organizationId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    const projects = await prisma.project.findMany({
      where: {
        organization: {
          id: data.organizationId,
          users: {
            some: {
              id: session?.user.id,
            },
          },
        },
      },
    })

    return {
      user: session?.user,
      projects,
    }
  })

export const Route = createFileRoute('/_authenticated/$organizationId')({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({ data: { organizationId: params.organizationId } }),
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
