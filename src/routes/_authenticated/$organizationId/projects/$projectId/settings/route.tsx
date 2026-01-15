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
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ComputerTerminal01Icon,
  PythonIcon,
  Typescript01Icon,
} from '@hugeicons/core-free-icons'
import { useMemo } from 'react'
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
import { prisma } from '@/db'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import CodeBlock from '@/components/ui/code-block'
import {
  getCurlIntegrationCode,
  getJavaScriptIntegrationCode,
  getPythonIntegrationCode,
} from '@/lib/api-integration'
import { Separator } from '@/components/ui/separator'

const formSchema = z.object({
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

    return {
      project,
    }
  })

const saveData = createServerFn({ method: 'POST' })
  .inputValidator(formSchema.extend({ projectId: z.string() }))
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
        title: data.title,
      },
    })

    return { success: true }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/projects/$projectId/settings',
)({
  component: RouteComponent,
  loader: ({ params }) => getData({ data: { projectId: params.projectId } }),
})

function RouteComponent() {
  // Server state
  const { project } = Route.useLoaderData()

  // URL state
  const params = Route.useParams()
  const router = useRouter()

  // Form state
  const form = useForm({
    defaultValues: {
      title: project?.title ?? '',
    },
    validators: {
      onSubmit: formSchema,
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

  const languages = useMemo(() => {
    const curlCode = getCurlIntegrationCode(
      params.organizationId,
      params.projectId,
    )

    const javascriptCode = getJavaScriptIntegrationCode(
      params.organizationId,
      params.projectId,
    )

    const pythonCode = getPythonIntegrationCode(
      params.organizationId,
      params.projectId,
    )

    return [
      {
        language: 'typescript',
        icon: Typescript01Icon,
        code: javascriptCode,
        label: 'JS/TS',
      },
      {
        language: 'python',
        icon: PythonIcon,
        code: pythonCode,
        label: 'Python',
      },
      {
        language: 'shell',
        icon: ComputerTerminal01Icon,
        code: curlCode,
        label: 'Curl',
      },
    ]
  }, [params.organizationId, params.projectId])

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
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                disabled={isSubmitting || !canSubmit}
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
          <CodeBlock languages={languages} />
        </CardContent>
      </Card>

      <Card className="ring-1 ring-destructive">
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
              Delete project...
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Outlet />
    </>
  )
}
