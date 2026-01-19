import { Outlet, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import * as z from 'zod'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { prisma } from '@/lib/database'
import { auth } from '@/lib/auth'
import AppFooter from '@/components/app-footer'

const getData = createServerFn()
  .inputValidator(z.object({ organizationId: z.string() }))
  .handler(async ({ data }) => {
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

    const organization = organizations.find((o) => o.id === data.organizationId)

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
      organizations,
      organization,
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
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
