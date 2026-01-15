import {
  Link,
  Outlet,
  createFileRoute,
  useLocation,
} from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { BuildingIcon, UserGroup03Icon } from '@hugeicons/core-free-icons'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
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
    <>
      <header className="flex h-14 shrink-0 items-center gap-2 border-b">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mr-2 h-4 data-[orientation=vertical]:self-center"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Settings</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex items-start flex-1 gap-8 pt-6 pb-32 px-6 max-w-5xl">
        <SidebarMenu className="max-w-64">
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

        <div className="flex flex-1 flex-col gap-8">
          <Outlet />
        </div>
      </div>
    </>
  )
}
