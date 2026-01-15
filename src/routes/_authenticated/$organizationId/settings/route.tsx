import {
  Link,
  Outlet,
  createFileRoute,
  useLocation,
} from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { BuildingIcon, UserGroup03Icon } from '@hugeicons/core-free-icons'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute(
  '/_authenticated/$organizationId/settings',
)({
  component: RouteComponent,
})

function RouteComponent() {
  // URL state
  const params = Route.useParams()
  const location = useLocation()

  return (
    <div className="flex flex-col gap-8 flex-1 px-6 py-12 w-full max-w-6xl mx-auto">
      <div className="space-y-5">
        <h1 className="text-2xl flex-1 font-medium">Settings</h1>

        <Separator />
      </div>

      <div className="flex items-start gap-16">
        <SidebarMenu className="flex-1 max-w-64 sticky top-4">
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname.startsWith(
                `/${params.organizationId}/settings/general`,
              )}
              asChild
            >
              <Link
                to="/$organizationId/settings/general"
                params={{ organizationId: params.organizationId }}
              >
                <HugeiconsIcon icon={BuildingIcon} />
                General
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname.startsWith(
                `/${params.organizationId}/settings/members`,
              )}
              asChild
            >
              <Link
                to="/$organizationId/settings/members"
                params={{ organizationId: params.organizationId }}
              >
                <HugeiconsIcon icon={UserGroup03Icon} />
                Members
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
