import {
  Link,
  Outlet,
  createFileRoute,
  useRouter,
} from '@tanstack/react-router'
import * as z from 'zod'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { toast } from 'sonner'
import { useForm } from '@tanstack/react-form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/database'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { IntegrationCodeBlock } from '@/components/integration-code-block'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { createSeoMeta } from '@/lib/seo'
import { cn } from '@/utils/classnames'

const titleSchema = z.object({
  title: z.string().min(1, 'Project title must be at least 1 character.'),
})

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
    })

    // Fetch the current user's membership for this project
    const membership = session?.user.id
      ? await prisma.projectMember.findUnique({
          where: {
            projectId_userId: {
              projectId: data.projectId,
              userId: session.user.id,
            },
          },
        })
      : null

    return {
      project,
      membership,
    }
  })

const saveDataSchema = z.object({
  projectId: z.string(),
  title: z
    .string()
    .min(1, 'Project title must be at least 1 character.')
    .optional(),
  rateLimitingEnabled: z.boolean().optional(),
})

const saveData = createServerFn({ method: 'POST' })
  .inputValidator(saveDataSchema)
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    await prisma.project.update({
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
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.rateLimitingEnabled !== undefined && {
          rateLimitingEnabled: data.rateLimitingEnabled,
        }),
      },
    })

    return { success: true }
  })

const updateSubscriptionSchema = z.object({
  projectId: z.string(),
  notifyOnFeedback: z.boolean(),
})

const updateSubscription = createServerFn({ method: 'POST' })
  .inputValidator(updateSubscriptionSchema)
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    if (!session?.user.id) {
      throw new Error('Unauthorized')
    }

    await prisma.projectMember.upsert({
      where: {
        projectId_userId: {
          projectId: data.projectId,
          userId: session.user.id,
        },
      },
      update: {
        notifyOnFeedback: data.notifyOnFeedback,
      },
      create: {
        projectId: data.projectId,
        userId: session.user.id,
        notifyOnFeedback: data.notifyOnFeedback,
      },
    })

    return { success: true }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/projects/$projectId/settings',
)({
  component: RouteComponent,
  loader: ({ params }) => getData({ data: { projectId: params.projectId } }),
  head: ({ loaderData }) => ({
    meta: createSeoMeta({
      title: loaderData?.project?.title
        ? `${loaderData.project.title} Settings`
        : 'Project Settings',
    }),
  }),
})

function RouteComponent() {
  // Server state
  const { project, membership } = Route.useLoaderData()

  // URL state
  const params = Route.useParams()
  const router = useRouter()

  const handleRateLimitToggle = async (checked: boolean) => {
    try {
      await saveData({
        data: {
          projectId: params.projectId,
          rateLimitingEnabled: checked,
        },
      })
      toast.success(
        checked ? 'Rate limiting enabled' : 'Rate limiting disabled',
      )
      await router.invalidate()
    } catch {
      toast.error('Failed to update rate limiting setting')
    }
  }

  const handleSubscriptionToggle = async (checked: boolean) => {
    try {
      await updateSubscription({
        data: {
          projectId: params.projectId,
          notifyOnFeedback: checked,
        },
      })
      toast.success(
        checked
          ? 'You will now receive notifications for new feedback'
          : 'You will no longer receive notifications for new feedback',
      )
      await router.invalidate()
    } catch {
      toast.error('Failed to update subscription setting')
    }
  }

  // Form state
  const form = useForm({
    defaultValues: {
      title: project?.title ?? '',
    },
    validators: {
      onSubmit: titleSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await saveData({
          data: {
            ...value,
            projectId: params.projectId,
          },
        })
        toast.success('Project updated')
        await router.invalidate()
      } catch {
        toast.error('Failed to update project')
      }
    },
  })

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Basic information</CardTitle>
          <CardDescription>Change the project title</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="update-project-form"
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
                      <FieldLabel htmlFor={field.name}>
                        Project title
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="My Project"
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
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              state.isDirty,
            ]}
            children={([canSubmit, isSubmitting, isDirty]) => (
              <Button
                disabled={isSubmitting || !canSubmit || !isDirty}
                form="update-project-form"
              >
                Save
              </Button>
            )}
          />
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Integration</CardTitle>
          <CardDescription>
            Here's how to send feedback into this project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <IntegrationCodeBlock
            organizationId={params.organizationId}
            projectId={params.projectId}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rate limiting</CardTitle>
          <CardDescription>
            Here you can toggle on or off rate limiting for ingress feedback
            into this project. The default rate limit is{' '}
            <span className="text-foreground">
              5 requests per minute per IP address
            </span>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch
              id="rate-limiting"
              checked={project?.rateLimitingEnabled ?? true}
              onCheckedChange={handleRateLimitToggle}
            />
            <Label
              htmlFor="rate-limiting"
              className={cn(
                'cursor-pointer',
                (project?.rateLimitingEnabled ?? true)
                  ? 'text-foreground'
                  : 'text-muted-foreground',
              )}
            >
              {(project?.rateLimitingEnabled ?? true) ? 'Enabled' : 'Disabled'}
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My subscription</CardTitle>
          <CardDescription>
            Do you want to get noficiations when new feedback comes into this
            project?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch
              id="subscription"
              checked={membership?.notifyOnFeedback ?? false}
              onCheckedChange={handleSubscriptionToggle}
            />
            <Label
              htmlFor="subscription"
              className={cn(
                'cursor-pointer',
                (membership?.notifyOnFeedback ?? false)
                  ? 'text-foreground'
                  : 'text-muted-foreground',
              )}
            >
              {(membership?.notifyOnFeedback ?? false)
                ? 'Subscribed'
                : 'Unsubscribed'}
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>
            If you want to delete this project, you can do so here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="destructive">
            <Link
              to="/$organizationId/projects/$projectId/settings/delete"
              params={{
                organizationId: params.organizationId,
                projectId: params.projectId,
              }}
            >
              Delete {project?.title || 'project'}...
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Outlet />
    </>
  )
}
