import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import * as z from 'zod'
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
import { prisma } from '@/db'
import { auth } from '@/lib/auth'

const getData = createServerFn()
  .inputValidator(z.object({ organizationId: z.string() }))
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
      include: {
        _count: {
          select: {
            projects: true,
          },
        },
      },
    })

    return {
      user: session?.user,
      organization,
    }
  })

const deleteOrganization = createServerFn({ method: 'POST' })
  .inputValidator(z.object({ organizationId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    await prisma.organization.delete({
      where: {
        id: data.organizationId,
        users: {
          some: {
            id: session?.user.id,
          },
        },
      },
    })

    return { success: true }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/settings/general/delete',
)({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({ data: { organizationId: params.organizationId } }),
})

function RouteComponent() {
  // Server state
  const { organization } = Route.useLoaderData()

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  // URL state
  const navigate = Route.useNavigate()
  const params = Route.useParams()

  // Handlers
  function handleClose() {
    setIsOpen(false)

    setTimeout(() => {
      navigate({
        to: '/$organizationId/settings/general',
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
      await deleteOrganization({
        data: {
          organizationId: params.organizationId,
        },
      })

      toast.success('Org deleted')
      setIsOpen(false)
      navigate({
        to: '/',
      })
    } catch {
      toast.error('Failed to delete org')
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete organization</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your organization{' '}
            <strong>{organization?.name ?? ''}</strong>? This will delete{' '}
            {organization?._count.projects} project(s) and all feedback entries
            with it.
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
            Yes, delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
