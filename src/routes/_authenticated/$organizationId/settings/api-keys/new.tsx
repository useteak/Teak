import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import { useForm } from '@tanstack/react-form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'
import { createSeoMeta } from '@/lib/seo'

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
    })

    return {
      organization,
    }
  })

const createApiKey = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({
      organizationId: z.string(),
      label: z.string().min(1, 'Please enter a label for this API key'),
    }),
  )
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    if (!session) {
      throw new Error('Unauthorized')
    }

    const organization = await prisma.organization.findUnique({
      where: {
        id: data.organizationId,
        users: { some: { id: session.user.id } },
      },
    })

    if (!organization) {
      throw new Error('Organization not found')
    }

    const apiKey = await prisma.apiKey.create({
      data: {
        label: data.label,
        organizationId: organization.id,
      },
    })

    return { apiKey }
  })

const formSchema = z.object({
  label: z.string().min(1, 'Please enter a label for this API key'),
})

export const Route = createFileRoute(
  '/_authenticated/$organizationId/settings/api-keys/new',
)({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({
      data: {
        organizationId: params.organizationId,
      },
    }),
  head: () => ({
    meta: createSeoMeta({ title: 'Create API Key' }),
  }),
})

function RouteComponent() {
  // Server state
  const { organization } = Route.useLoaderData()

  // URL state
  const params = Route.useParams()
  const navigate = Route.useNavigate()

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isCreating, setIsCreating] = useState<boolean>(false)

  // Form state
  const form = useForm({
    defaultValues: {
      label: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      setIsCreating(true)
      try {
        await createApiKey({
          data: {
            organizationId: params.organizationId,
            label: value.label,
          },
        })

        toast.success('API key created')
        setIsOpen(false)
        navigate({
          to: '/$organizationId/settings/api-keys',
          params: {
            organizationId: params.organizationId,
          },
        })
      } catch {
        toast.error('Failed to create API key')
      } finally {
        setIsCreating(false)
      }
    },
  })

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
    if (isCreating) return

    if (!open) {
      handleClose()
      return
    }

    setIsOpen(open)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create API key</DialogTitle>
          <DialogDescription>
            Create a new API key for{' '}
            {organization?.name ? (
              <span className="font-medium">{organization.name}</span>
            ) : (
              'your organization'
            )}
            .
          </DialogDescription>
        </DialogHeader>

        <form
          id="create-api-key-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="label"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Label</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      placeholder="Production API key"
                      type="text"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      disabled={isCreating}
                      aria-invalid={isInvalid}
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>

        <DialogFooter>
          <Button type="button" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <form.Subscribe
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              state.isDirty,
            ]}
            children={([canSubmit, isSubmitting, isDirty]) => (
              <Button
                type="submit"
                form="create-api-key-form"
                disabled={isCreating || isSubmitting || !canSubmit || !isDirty}
              >
                {isSubmitting ? 'Creating…' : 'Create'}
              </Button>
            )}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
