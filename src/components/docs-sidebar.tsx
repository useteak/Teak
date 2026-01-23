import { Link, useLocation } from '@tanstack/react-router'
import { AppLogo } from './app-logo'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function DocsSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader>
        <AppLogo
          className="pb-2 p-1.5 opacity-25 hover:opacity-100 transition-opacity"
          imageClassName="h-4"
        />

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={location.pathname === `/docs`} asChild>
              <Link to="/docs">Getting started</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname === `/docs/auth`}
              asChild
            >
              <Link to="/docs/auth">Authentication</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname === `/docs/organizations`}
              asChild
            >
              <Link to="/docs/organizations">Organizations</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname === `/docs/projects`}
              asChild
            >
              <Link to="/docs/projects">Projects</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname === `/docs/notifications`}
              asChild
            >
              <Link to="/docs/notifications">Notifications</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname === `/docs/feedback`}
              asChild
            >
              <Link to="/docs/feedback">Feedback</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={location.pathname === `/docs/rate-limiting`}
              asChild
            >
              <Link to="/docs/rate-limiting">Rate limiting</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Teak API</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname === `/docs/api/overview`}
                  asChild
                >
                  <Link to="/docs/api/overview">API overview</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname === `/docs/api/auth`}
                  asChild
                >
                  <Link to="/docs/api/auth">Authentication</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname === `/docs/api/organizations`}
                  asChild
                >
                  <Link to="/docs/api/organizations">Organizations</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname === `/docs/api/projects`}
                  asChild
                >
                  <a href="/docs/api/projects">Projects</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname === `/docs/api/feedback`}
                  asChild
                >
                  <a href="/docs/api/feedback">Feedback</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
