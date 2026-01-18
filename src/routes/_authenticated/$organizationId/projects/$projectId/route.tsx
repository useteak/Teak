import {
  Link,
  Outlet,
  createFileRoute,
  useLocation,
} from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { z } from 'zod'
import { MessageIcon, Settings05Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Separator } from '@/components/ui/separator'
import { createSeoMeta } from '@/lib/seo'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { prisma } from '@/lib/database'
import { auth } from '@/lib/auth'

const getData = createServerFn()
  .inputValidator(z.object({ projectId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    const project = await prisma.project.findUnique({
      where: {
        id: data.projectId,
        organization: {
          users: {
            some: {
              id: session?.user.id,
            },
          },
        },
      },
    })

    return {
      project,
    }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/projects/$projectId',
)({
  component: RouteComponent,
  loader: ({ params }) => getData({ data: { projectId: params.projectId } }),
  head: ({ loaderData }) => ({
    meta: createSeoMeta({
      title: loaderData?.project?.title ?? 'Project',
    }),
  }),
})

function RouteComponent() {
  // Server state
  const { project } = Route.useLoaderData()

  // URL state
  const params = Route.useParams()
  const location = useLocation()

  return (
    <div className="flex flex-col gap-8 flex-1 px-6 py-12 w-full max-w-6xl mx-auto">
      <div className="space-y-5">
        <h1 className="text-2xl flex-1 font-medium">{project?.title}</h1>

        <Separator />
      </div>

      <div className="flex items-start gap-16">
        <SidebarMenu className="flex-1 max-w-64 sticky top-6">
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname.startsWith(
                `/${params.organizationId}/projects/${params.projectId}/feedback`,
              )}
              asChild
            >
              <Link
                to="/$organizationId/projects/$projectId/feedback"
                params={{
                  organizationId: params.organizationId,
                  projectId: params.projectId,
                }}
              >
                <HugeiconsIcon icon={MessageIcon} />
                Feedback
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname.startsWith(
                `/${params.organizationId}/projects/${params.projectId}/settings`,
              )}
              asChild
            >
              <Link
                to="/$organizationId/projects/$projectId/settings"
                params={{
                  organizationId: params.organizationId,
                  projectId: params.projectId,
                }}
              >
                <HugeiconsIcon icon={Settings05Icon} />
                Settings
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="flex flex-1 flex-col gap-8 min-w-0 pb-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
