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
import { createSeoMeta } from '@/lib/seo'

const formSchema = z.object({
  name: z.string().min(1, 'Name must be at least 1 character.'),
})

const getData = createServerFn().handler(async () => {
  const session = await auth.api.getSession({
    headers: getRequestHeaders(),
  })

  if (!session?.user) {
    return { user: null }
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  })

  return { user }
})

const saveData = createServerFn({ method: 'POST' })
  .inputValidator(formSchema)
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    if (!session?.user) {
      throw new Error('Unauthorized')
    }

    await prisma.user.update({
      where: { id: session.user.id },
      data: { name: data.name },
    })

    return { success: true }
  })

export const Route = createFileRoute(
  '/_authenticated/account/settings/general',
)({
  component: RouteComponent,
  loader: () => getData(),
  head: () => ({
    meta: createSeoMeta({ title: 'Account Settings' }),
  }),
})

function RouteComponent() {
  // Server state
  const { user } = Route.useLoaderData()

  // URL state
  const router = useRouter()

  // Form state
  const form = useForm({
    defaultValues: {
      name: user?.name ?? '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await saveData({ data: value })
        toast.success('Account updated')
        await router.invalidate()
      } catch {
        toast.error('Failed to update account')
      }
    },
  })

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Basic information</CardTitle>
          <CardDescription>Here you can change your name.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="update-account-form"
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
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={user?.email ?? ''}
                  disabled
                  readOnly
                  autoComplete="email"
                />
              </Field>
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
                form="update-account-form"
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
            If you want to delete your account, you can do so here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="destructive">
            <Link to="/account/settings/general/delete">Delete account...</Link>
          </Button>
        </CardContent>
      </Card>

      <Outlet />
    </>
  )
}
