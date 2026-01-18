import {
  Link,
  Outlet,
  createFileRoute,
  useLocation,
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

const formSchema = z.object({
  name: z.string().min(1, 'Organization name must be at least 1 character.'),
})

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
      user: session?.user,
      organization,
    }
  })

const saveData = createServerFn({ method: 'POST' })
  .inputValidator(formSchema.extend({ organizationId: z.string() }))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    const organization = await prisma.organization.update({
      where: {
        id: data.organizationId,
        users: {
          some: {
            id: session?.user.id,
          },
        },
      },
      data: {
        name: data.name,
      },
    })

    return { success: true }
  })

export const Route = createFileRoute(
  '/_authenticated/$organizationId/settings/general',
)({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({ data: { organizationId: params.organizationId } }),
})

function RouteComponent() {
  // Server state
  const { organization } = Route.useLoaderData()

  // URL state
  const params = Route.useParams()
  const router = useRouter()

  // Form state
  const form = useForm({
    defaultValues: {
      name: organization?.name ?? '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await saveData({
          data: {
            ...value,
            organizationId: params.organizationId,
          },
        })
        toast.success('Org updated')
        await router.invalidate()
      } catch {
        toast.error('Failed to update org')
      }
    },
  })

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Basic information</CardTitle>
          <CardDescription>
            Change the organization name or avatar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="update-org-form"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              <form.Field
                name="name"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Organization name
                      </FieldLabel>
                      <Input
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
                form="update-org-form"
              >
                Save
              </Button>
            )}
          />
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>
            If you want to delete your organization, you can do so here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="destructive">
            <Link
              to="/$organizationId/settings/general/delete"
              params={{ organizationId: params.organizationId }}
            >
              Delete organization...
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Outlet />
    </>
  )
}
