import { LogoutIcon, Settings05Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useNavigate } from '@tanstack/react-router'
import { DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { authClient } from '@/lib/auth-client'

interface UserAccountDropdownContentProps {
  sideOffset?: number
}

export function UserAccountDropdownContent({
  sideOffset = 8,
}: UserAccountDropdownContentProps) {
  const navigate = useNavigate()

  return (
    <DropdownMenuContent sideOffset={sideOffset} className="w-48">
      <DropdownMenuItem asChild>
        <a href="/account/settings/general">
          <HugeiconsIcon icon={Settings05Icon} />
          Account settings
        </a>
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
  )
}
