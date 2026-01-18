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
import { prisma } from '@/lib/database'
import { auth } from '@/lib/auth'
import { createSeoMeta } from '@/lib/seo'

const getData = createServerFn()
  .inputValidator(z.object({ projectId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    const project = await prisma.project.findUnique({
      where: {
        id: data.projectId,
        organization: {
          users: {
            some: {
              id: session?.user.id,
            },
          },
        },
      },
      include: {
        _count: {
          select: {
            feedbacks: true,
          },
        },
      },
    })

    return {
      project,
    }
  })

const deleteProject = createServerFn({ method: 'POST' })
  .inputValidator(z.object({ projectId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    await prisma.project.delete({
      where: {
        id: data.projectId,
        organization: {
          users: {
            some: {
              id: session?.user.id,
            },
          },
        },
      },
    })

    return { success: true }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/projects/$projectId/settings/delete',
)({
  component: RouteComponent,
  loader: ({ params }) => getData({ data: { projectId: params.projectId } }),
  head: ({ loaderData }) => ({
    meta: createSeoMeta({
      title: loaderData?.project?.title
        ? `Delete ${loaderData.project.title}`
        : 'Delete project',
    }),
  }),
})

function RouteComponent() {
  // Server state
  const { project } = Route.useLoaderData()

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
        to: '/$organizationId/projects/$projectId/settings',
        params: {
          organizationId: params.organizationId,
          projectId: params.projectId,
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
      await deleteProject({
        data: {
          projectId: params.projectId,
        },
      })

      toast.success('Project deleted')
      setIsOpen(false)
      navigate({
        to: '/$organizationId',
        params: {
          organizationId: params.organizationId,
        },
      })
    } catch {
      toast.error('Failed to delete project')
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete project</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete the project{' '}
            <strong>{project?.title ?? ''}</strong>? This will delete{' '}
            {project?._count.feedbacks} feedback entry(ies) with it.
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
