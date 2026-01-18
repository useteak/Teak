import { useForm } from '@tanstack/react-form'
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import { z } from 'zod'
import { HugeiconsIcon } from '@hugeicons/react'
import { GithubIcon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import { authMiddleware } from '@/middleware/auth'
import { Separator } from '@/components/ui/separator'
import { useErrorCallbackURL } from '@/hooks/use-error-callback-url'

const signupSchema = z
  .object({
    name: z.string().trim().min(1, 'Name is required'),
    email: z.email('Please enter a valid email').trim(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(72, 'Password must be at most 72 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
  validateSearch: z.object({
    redirect: z.string().optional(),
    email: z.string().optional(),
  }),
  server: {
    middleware: [authMiddleware(false)],
  },
})

function RouteComponent() {
  const navigate = useNavigate()
  const search = Route.useSearch()

  const redirectTo = search.redirect ?? '/'
  const errorCallbackURL = useErrorCallbackURL('/signup', {
    redirect: search.redirect,
    email: search.email,
  })

  const form = useForm({
    defaultValues: {
      name: '',
      email: search.email ?? '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: signupSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await new Promise<void>((resolve, reject) => {
          authClient.signUp.email({
            email: value.email,
            password: value.password,
            name: value.name,
            callbackURL: redirectTo,
            fetchOptions: {
              onSuccess: () => resolve(),
              onError: () => reject(new Error('Signup failed')),
            },
          })
        })

        navigate({
          to: redirectTo,
        })
      } catch {
        toast.error('Failed to create account')
      }
    },
  })

  return (
    <div className="flex items-center justify-center h-svh">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>
            Create an account using your email and password.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-5">
          <Button
            variant="outline"
            onClick={() =>
              authClient.signIn.social({
                provider: 'github',
                requestSignUp: true,
                callbackURL: redirectTo,
                newUserCallbackURL: redirectTo,
                errorCallbackURL,
              })
            }
          >
            <HugeiconsIcon icon={GithubIcon} />
            Sign up with Github
          </Button>

          <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">
              Or with email & password
            </span>
            <Separator className="flex-1" />
          </div>

          <form
            id="signup-form"
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
                        placeholder="First Last"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        autoComplete="name"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />

              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="jane@doe.com"
                        type="email"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        autoComplete="email"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />

              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="•••••••••••"
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        autoComplete="new-password"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />

              <form.Field
                name="confirmPassword"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Confirm Password
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="•••••••••••"
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        autoComplete="new-password"
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

        <CardFooter className="flex-col gap-4 py-5">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                className="w-full"
                disabled={isSubmitting || !canSubmit}
                form="signup-form"
                type="submit"
              >
                {isSubmitting ? 'Creating…' : 'Create account'}
              </Button>
            )}
          />
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              to="/login"
              search={{ redirect: search.redirect, email: search.email }}
              className="link"
            >
              Log in here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
