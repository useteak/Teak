import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { z } from 'zod'
import { useState } from 'react'
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
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'

const getData = createServerFn()
  .inputValidator(
    z.object({ organizationId: z.string(), memberId: z.string() }),
  )
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    const organization = await prisma.organization.findUnique({
      where: {
        id: data.organizationId,
        users: {
          some: {
            id: session?.user.id,
          },
        },
      },
    })

    const member = await prisma.user.findUnique({
      where: {
        id: data.memberId,
        organizations: {
          some: {
            id: organization?.id,
          },
        },
      },
    })

    return {
      member,
      organization,
    }
  })

const removeUserFromOrganization = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({ organizationId: z.string(), memberId: z.string() }),
  )
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    await prisma.user.update({
      where: {
        id: data.memberId,
        organizations: {
          some: {
            id: data.organizationId,
            users: {
              some: {
                id: session?.user.id,
              },
            },
          },
        },
      },
      data: {
        organizations: {
          disconnect: {
            id: data.organizationId,
          },
        },
      },
    })

    return { success: true }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/settings/members/$memberId/delete',
)({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({
      data: {
        organizationId: params.organizationId,
        memberId: params.memberId,
      },
    }),
})

function RouteComponent() {
  // Server state
  const { member, organization } = Route.useLoaderData()

  // URL state
  const params = Route.useParams()
  const navigate = Route.useNavigate()

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  // Handlers
  function handleClose() {
    setIsOpen(false)

    setTimeout(() => {
      navigate({
        to: '/$organizationId/settings/members',
        params: {
          organizationId: params.organizationId,
        },
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
      await removeUserFromOrganization({
        data: {
          organizationId: params.organizationId,
          memberId: params.memberId,
        },
      })

      toast.success('Member removed')
      setIsOpen(false)
      navigate({
        to: '/$organizationId/settings/members',
        params: {
          organizationId: params.organizationId,
        },
      })
    } catch {
      toast.error('Failed to remove member')
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Remove {member?.name} from organization
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to remove <strong>{member?.name}</strong> from
            the <strong>{organization?.name}</strong>?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            disabled={isDeleting}
            onClick={(e) => {
              e.preventDefault()
              void handleDelete()
            }}
          >
            Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
