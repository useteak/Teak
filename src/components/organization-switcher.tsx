import { HugeiconsIcon } from '@hugeicons/react'
import { ChevronDown, PlusSignIcon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Route } from '@/routes/_authenticated/$organizationId/route'

export default function OrganizationSwitcher() {
  // Server state
  const { organizations, organization } = Route.useLoaderData()
  const navigate = Route.useNavigate()
  const params = Route.useParams()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="w-fit px-1.5">
              <div className="bg-primary text-primary-foreground flex aspect-square size-5 items-center justify-center rounded-sm">
                <p className="uppercase">{organization?.name[0]}</p>
              </div>
              <span className="truncate font-medium">{organization?.name}</span>
              <HugeiconsIcon icon={ChevronDown} className="opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Organizations
            </DropdownMenuLabel>
            {organizations.map((o) => {
              const isActive = params.organizationId === o.id

              return (
                <DropdownMenuCheckboxItem
                  key={o.name}
                  checked={isActive}
                  onClick={() => {
                    if (isActive) {
                      return
                    }

                    navigate({
                      to: '/$organizationId',
                      params: {
                        organizationId: o.id,
                      },
                    })
                  }}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <p className="uppercase">{o.name[0]}</p>
                  </div>
                  {o.name}
                </DropdownMenuCheckboxItem>
              )
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2" asChild>
              <Link to="/new-organization">
                <div className="bg-background flex size-6 items-center justify-center rounded-sm border">
                  <HugeiconsIcon icon={PlusSignIcon} className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">
                  Add organization
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
