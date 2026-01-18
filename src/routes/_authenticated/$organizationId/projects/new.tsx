import * as z from 'zod'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useForm } from '@tanstack/react-form'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { toast } from 'sonner'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'
import { Input } from '@/components/ui/input'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  title: z.string().min(1, 'Project title must be at least 1 character.'),
})

const saveData = createServerFn({ method: 'POST' })
  .inputValidator(
    formSchema.extend({
      organizationId: z.string(),
    }),
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
      include: {
        users: {
          select: {
            id: true,
          },
        },
      },
    })

    if (!organization) {
      throw new Error('Organization not found')
    }

    const project = await prisma.project.create({
      data: {
        title: data.title,
        organization: {
          connect: {
            id: organization.id,
          },
        },
        members: {
          create: organization.users.map((user) => ({
            userId: user.id,
            // Only the creator gets notified by default
            notifyOnFeedback: user.id === session?.user.id,
          })),
        },
      },
    })

    return project
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/projects/new',
)({
  component: RouteComponent,
})

function RouteComponent() {
  // URL state
  const params = Route.useParams()
  const navigate = useNavigate()

  // Form state
  const form = useForm({
    defaultValues: {
      title: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const project = await saveData({
          data: {
            ...value,
            organizationId: params.organizationId,
          },
        })
        toast.success('Org created')
        navigate({
          to: '/$organizationId/projects/$projectId/settings',
          params: {
            organizationId: project.organizationId,
            projectId: project.id,
          },
        })
      } catch {
        toast.error('Failed to create org')
      }
    },
  })

  return (
    <div className="flex min-h-svh items-center justify-center">
      <Card size="sm" className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <p>New project</p>
          </CardTitle>
          <CardDescription>
            Fill out the form to create a project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="create-project-form"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              <form.Field
                name="title"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Project name</FieldLabel>
                      <Input
                        autoFocus
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Acme INC"
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
        </CardContent>
        <CardFooter className="justify-end">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                disabled={isSubmitting || !canSubmit}
                form="create-project-form"
                size="sm"
              >
                Create project <HugeiconsIcon icon={ArrowRight02Icon} />{' '}
              </Button>
            )}
          />
        </CardFooter>
      </Card>
    </div>
  )
}
