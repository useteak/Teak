import {
  BookmarkIcon,
  HomeIcon,
  IceCubesIcon,
  Layers01Icon,
  LogoutIcon,
  PlusSignIcon,
  Settings05Icon,
  UnfoldMoreIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useLocation } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'
import OrganizationSwitcher from './organization-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Route } from '@/routes/_authenticated/$organizationId/route'
import { authClient } from '@/lib/auth-client'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function AppSidebar() {
  // Server state
  const { user, projects } = Route.useLoaderData()

  // URL state
  const navigate = Route.useNavigate()
  const params = Route.useParams()
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader>
        <OrganizationSwitcher />

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname === `/${params.organizationId}`}
              asChild
            >
              <Link
                to="/$organizationId"
                params={{ organizationId: params.organizationId }}
              >
                <HugeiconsIcon icon={HomeIcon} />
                Home
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname.startsWith(
                `/${params.organizationId}/settings`,
              )}
              asChild
            >
              <Link
                to="/$organizationId/settings/general"
                params={{ organizationId: params.organizationId }}
              >
                <HugeiconsIcon icon={Settings05Icon} />
                Settings
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Tooltip>
              <TooltipTrigger>
                <SidebarMenuButton
                  disabled
                  isActive={
                    location.pathname ===
                    `/${params.organizationId}/integrations`
                  }
                  asChild
                >
                  <Link
                    to="/$organizationId/integrations"
                    params={{ organizationId: params.organizationId }}
                  >
                    <HugeiconsIcon icon={IceCubesIcon} />
                    Integrations
                  </Link>
                </SidebarMenuButton>
              </TooltipTrigger>
              <TooltipContent>Coming soon</TooltipContent>
            </Tooltip>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
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
                      to="/$organizationId/projects/$projectId/feedback"
                      params={{
                        organizationId: params.organizationId,
                        projectId: project.id,
                      }}
                    >
                      <HugeiconsIcon icon={Layers01Icon} />
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
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user?.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user?.name}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {user?.email}
                    </span>
                  </div>
                  <HugeiconsIcon icon={UnfoldMoreIcon} />
                </SidebarMenuButton>
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
