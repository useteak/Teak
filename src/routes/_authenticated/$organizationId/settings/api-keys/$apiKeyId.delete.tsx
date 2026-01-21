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
import { createSeoMeta } from '@/lib/seo'

const getData = createServerFn()
  .inputValidator(
    z.object({ organizationId: z.string(), apiKeyId: z.string() }),
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

    const apiKey = await prisma.apiKey.findUnique({
      where: {
        id: data.apiKeyId,
        organizationId: organization?.id,
      },
    })

    return {
      apiKey,
      organization,
    }
  })

const deleteApiKey = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({ organizationId: z.string(), apiKeyId: z.string() }),
  )
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    await prisma.apiKey.delete({
      where: {
        id: data.apiKeyId,
        organization: {
          id: data.organizationId,
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
  '/_authenticated/$organizationId/settings/api-keys/$apiKeyId/delete',
)({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({
      data: {
        organizationId: params.organizationId,
        apiKeyId: params.apiKeyId,
      },
    }),
  head: ({ loaderData }) => ({
    meta: createSeoMeta({
      title: loaderData?.apiKey?.label
        ? `Delete ${loaderData.apiKey.label}`
        : 'Delete API Key',
    }),
  }),
})

function RouteComponent() {
  // Server state
  const { apiKey, organization } = Route.useLoaderData()

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
        to: '/$organizationId/settings/api-keys',
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
      await deleteApiKey({
        data: {
          organizationId: params.organizationId,
          apiKeyId: params.apiKeyId,
        },
      })

      toast.success('API key deleted')
      setIsOpen(false)
      navigate({
        to: '/$organizationId/settings/api-keys',
        params: {
          organizationId: params.organizationId,
        },
      })
    } catch {
      toast.error('Failed to delete API key')
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete API key</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete the API key{' '}
            <strong>{apiKey?.label}</strong> from{' '}
            <strong>{organization?.name}</strong>? This action cannot be undone
            and any applications using this key will stop working.
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
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
