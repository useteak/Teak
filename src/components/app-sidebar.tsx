import {
  BookmarkIcon,
  LogoutIcon,
  MenuIcon,
  PlusSignIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useLocation } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Route } from '@/routes/_authenticated/$organizationId/route'
import { authClient } from '@/lib/auth-client'

export function AppSidebar() {
  // Server state
  const { user, projects } = Route.useLoaderData()

  // URL state
  const navigate = Route.useNavigate()
  const params = Route.useParams()
  const location = useLocation()

  return (
    <Sidebar>
      {/* <SidebarHeader> */}
      {/* </SidebarHeader> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Settings</SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>API Keys</SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>Integrations</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>

          <SidebarGroupAction title="Add Project" asChild>
            <Link
              to="/$organizationId/projects/new"
              params={{ organizationId: params.organizationId }}
            >
              <HugeiconsIcon icon={PlusSignIcon} />{' '}
              <span className="sr-only">Add Project</span>
            </Link>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith(
                      `/${params.organizationId}/projects/${project.id}`,
                    )}
                    asChild
                  >
                    <Link
                      to="/$organizationId/projects/$projectId"
                      params={{
                        organizationId: params.organizationId,
                        projectId: project.id,
                      }}
                    >
                      {project.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-row justify-between items-center hover:bg-card p-2 pr-3 text-left focus:outline-none group/user-dropdown focus-visible:ring-1 focus-visible:ring-sidebar-ring">
            <div className="space-y-1">
              <p className="text-xs">{user?.name}</p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>

            <HugeiconsIcon
              className="text-muted-foreground size-3.5 group-hover/user-dropdown:text-foreground"
              icon={MenuIcon}
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={8}>
            <DropdownMenuItem>
              <HugeiconsIcon icon={BookmarkIcon} />
              Documentation
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onSelect={() => {
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      navigate({
                        to: '/login',
                      })
                    },
                  },
                })
              }}
            >
              <HugeiconsIcon icon={LogoutIcon} />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
