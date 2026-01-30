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
import { createSeoMeta } from '@/lib/seo'

const formSchema = z.object({
  name: z.string().min(1, 'Organization name must be at least 1 character.'),
})

const getData = createServerFn().handler(async () => {
  const session = await auth.api.getSession({
    headers: getRequestHeaders(),
  })

  const organizations = await prisma.organization.findMany({
    where: {
      users: {
        some: {
          id: session?.user.id,
        },
      },
    },
  })

  return {
    user: session?.user,
    organizations,
  }
})

const saveData = createServerFn({ method: 'POST' })
  .inputValidator(formSchema)
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getRequestHeaders(),
    })

    const organization = await prisma.organization.create({
      data: {
        name: data.name,
        users: {
          connect: {
            id: session?.user.id,
          },
        },
      },
    })

    return organization
  })

export const Route = createFileRoute('/_authenticated/new-organization')({
  component: RouteComponent,
  loader: () => getData(),
  head: () => ({
    meta: createSeoMeta({ title: 'New organization' }),
  }),
})

function RouteComponent() {
  // URL state
  const navigate = useNavigate()

  // Form state
  const form = useForm({
    defaultValues: {
      name: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const organization = await saveData({ data: value })
        toast.success('Org created')
        navigate({
          to: '/$organizationId',
          params: {
            organizationId: organization.id,
          },
        })
      } catch {
        toast.error('Failed to create org')
      }
    },
  })

  return (
    <div className="flex min-h-svh items-center justify-center p-4">
      <Card size="sm" className="w-full max-w-md">
        <CardHeader>
          <CardTitle>New organization</CardTitle>
          <CardDescription>
            Create a new organization by giving it a name. You can invite other
            users to join your organization later.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="create-org-form"
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
                      <FieldLabel htmlFor={field.name}>Org name</FieldLabel>
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
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              state.isDirty,
            ]}
            children={([canSubmit, isSubmitting, isDirty]) => (
              <Button
                disabled={isSubmitting || !canSubmit || !isDirty}
                form="create-org-form"
                size="sm"
              >
                Create organization{' '}
                <HugeiconsIcon icon={ArrowRight02Icon} />{' '}
              </Button>
            )}
          />
        </CardFooter>
      </Card>
    </div>
  )
}
