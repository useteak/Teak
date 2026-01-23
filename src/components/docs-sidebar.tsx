import {
  SecurityLockIcon,
  WaveIcon,
  WavingHandIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useLocation } from '@tanstack/react-router'
import { AppLogo } from './app-logo'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
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
              <Link to="/docs">Authentication</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
