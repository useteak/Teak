import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { toast } from 'sonner'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { prisma } from '@/lib/database'
import { auth } from '@/lib/auth'
import { authClient } from '@/lib/auth-client'

const deleteAccount = createServerFn({ method: 'POST' }).handler(async () => {
  const session = await auth.api.getSession({
    headers: getRequestHeaders(),
  })

  if (!session?.user) {
    throw new Error('Unauthorized')
  }

  const userId = session.user.id

  await prisma.$transaction(async (tx) => {
    // Find organizations where the user is the only member
    const organizationsToDelete = await tx.organization.findMany({
      where: {
        users: {
          some: { id: userId },
        },
      },
      include: {
        _count: {
          select: { users: true },
        },
      },
    })

    const singleMemberOrgIds = organizationsToDelete
      .filter((org) => org._count.users === 1)
      .map((org) => org.id)

    // Delete organizations where the user is the only member
    if (singleMemberOrgIds.length > 0) {
      await tx.organization.deleteMany({
        where: { id: { in: singleMemberOrgIds } },
      })
    }

    // Delete the user
    await tx.user.delete({
      where: { id: userId },
    })
  })

  return { success: true }
})

export const Route = createFileRoute(
  '/_authenticated/account/settings/general/delete',
)({
  component: RouteComponent,
})

function RouteComponent() {
  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  // URL state
  const navigate = Route.useNavigate()

  // Handlers
  function handleClose() {
    setIsOpen(false)

    setTimeout(() => {
      navigate({
        to: '/account/settings/general',
      })
    }, 200)
  }

  function handleOpenChange(open: boolean) {
    if (isDeleting) return

    if (!open) {
      handleClose()
      return
    }

    setIsOpen(open)
  }

  async function handleDelete() {
    setIsDeleting(true)
    try {
      await deleteAccount()

      toast.success('Account deleted')
      setIsOpen(false)

      authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            navigate({
              to: '/login',
            })
          },
        },
      })
    } catch {
      toast.error('Failed to delete account')
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete account</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? This action cannot be
            undone and all your data will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            disabled={isDeleting}
            onClick={(e) => {
              e.preventDefault()
              void handleDelete()
            }}
          >
            Yes, delete my account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
