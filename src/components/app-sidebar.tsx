import {
  BookmarkIcon,
  IceCubesIcon,
  Layers01Icon,
  MessageIcon,
  PlusSignIcon,
  Settings05Icon,
  UnfoldMoreIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import OrganizationSwitcher from './organization-switcher'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { AppLogo } from './app-logo'
import { UserAccountDropdownContent } from './user-account-dropdown-content'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import FeedbackForm from './feedback-form'
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

export function AppSidebar() {
  // Server state
  const { user, projects } = Route.useLoaderData()

  // URL state
  const params = Route.useParams()
  const location = useLocation()

  // Local state
  const [isFeedbackFormOpen, setIsFeedbackFormOpen] = useState<boolean>(false)

  return (
    <Sidebar>
      <SidebarHeader>
        <AppLogo
          className="pb-2 p-1.5 opacity-25 hover:opacity-100 transition-opacity"
          imageClassName="h-4"
        />

        <OrganizationSwitcher />

        <SidebarMenu>
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

            <SidebarMenuButton asChild>
              <Link to="/docs">
                <HugeiconsIcon icon={BookmarkIcon} />
                Documentation
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
            {projects.length > 0 ? (
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
            ) : (
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname.startsWith(
                      `/${params.organizationId}/projects/new`,
                    )}
                  >
                    <Link
                      to="/$organizationId/projects/new"
                      params={{ organizationId: params.organizationId }}
                    >
                      <HugeiconsIcon icon={PlusSignIcon} />
                      New project
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Popover
              open={isFeedbackFormOpen}
              onOpenChange={setIsFeedbackFormOpen}
            >
              <PopoverTrigger asChild>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={MessageIcon} />
                  Got feedback?
                </SidebarMenuButton>
              </PopoverTrigger>
              <PopoverContent className="w-96" side="top" align="start">
                <FeedbackForm
                  userEmail={user?.email}
                  onClose={() => setIsFeedbackFormOpen(false)}
                />
              </PopoverContent>
            </Popover>
          </SidebarMenuItem>

          <SidebarMenuItem className="mt-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
                >
                  <Avatar className="h-8 w-8">
                    {user?.image && (
                      <AvatarImage src={user.image} alt={user.name} />
                    )}
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

              <UserAccountDropdownContent />
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
