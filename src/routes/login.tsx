import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import { z } from 'zod'
import { HugeiconsIcon } from '@hugeicons/react'
import { ViewIcon, ViewOffIcon } from '@hugeicons/core-free-icons'
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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { authClient } from '@/lib/auth-client'
import { authMiddleware } from '@/middleware/auth'
import { Separator } from '@/components/ui/separator'
import { useErrorCallbackURL } from '@/hooks/use-error-callback-url'
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'

const loginSchema = z.object({
  email: z.email('Please enter a valid email').trim(),
  password: z.string().min(1, 'Please enter your password'),
})

export const Route = createFileRoute('/login')({
  component: RouteComponent,
  validateSearch: z.object({
    redirect: z.string().optional(),
    email: z.string().optional(),
    error: z.string().optional(),
  }),
  head: () => ({
    meta: createSeoMeta({ title: 'Log in' }),
  }),
  server: {
    middleware: [authMiddleware(false)],
  },
})

function RouteComponent() {
  const navigate = useNavigate()
  const search = Route.useSearch()
  const [showPassword, setShowPassword] = useState(false)

  const redirectTo = search.redirect ?? '/home'
  const error = search.error ?? null
  const errorCallbackURL = useErrorCallbackURL('/login', {
    redirect: search.redirect,
    email: search.email,
  })

  const form = useForm({
    defaultValues: {
      email: search.email ?? '',
      password: '',
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await new Promise<void>((resolve, reject) => {
          authClient.signIn.email({
            email: value.email,
            password: value.password,
            fetchOptions: {
              onSuccess: () => resolve(),
              onError: () => reject(new Error('Login failed')),
            },
          })
        })

        navigate({
          to: redirectTo,
        })
      } catch {
        toast.error('Failed to log in')
      }
    },
  })

  return (
    <div className="flex items-center justify-center h-svh">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Log in to {config.productName}</CardTitle>
          <CardDescription>
            Log in to {config.productName} using a social provider
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-col gap-3.5">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() =>
                  authClient.signIn.social({
                    provider: 'github',
                    callbackURL: redirectTo,
                    errorCallbackURL,
                  })
                }
              >
                <img
                  src="/github-logo.svg"
                  alt="GitHub"
                  className="h-4 w-auto dark:invert"
                />
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  authClient.signIn.social({
                    provider: 'linear',
                    callbackURL: redirectTo,
                    errorCallbackURL,
                  })
                }
              >
                <img
                  src="/linear-logo.svg"
                  alt="Linear"
                  className="h-4 w-auto dark:invert"
                />
                Linear
              </Button>
            </div>

            {error === 'signup_disabled' && (
              <p className="text-sm text-destructive text-center">
                Please{' '}
                <Link
                  to="/signup"
                  search={{ redirect: search.redirect, email: search.email }}
                  className="link"
                >
                  sign up
                </Link>{' '}
                before logging in.
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">
              Or with email & password
            </span>
            <Separator className="flex-1" />
          </div>

          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
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
                      <InputGroup>
                        <InputGroupInput
                          id={field.name}
                          name={field.name}
                          placeholder="•••••••••••"
                          type={showPassword ? 'text' : 'password'}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="current-password"
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            size="icon-xs"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={
                              showPassword ? 'Hide password' : 'Show password'
                            }
                          >
                            <HugeiconsIcon
                              icon={showPassword ? ViewOffIcon : ViewIcon}
                            />
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                      <FieldDescription>
                        Forgot your password?{' '}
                        <Link
                          to="/reset-password"
                          search={{ email: search.email }}
                          className="link"
                        >
                          Reset it here
                        </Link>
                      </FieldDescription>
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
                form="login-form"
                type="submit"
              >
                {isSubmitting ? 'Logging in…' : 'Log in'}
              </Button>
            )}
          />
          <p className="text-sm text-muted-foreground">
            Don't have account yet?{' '}
            <Link
              to="/signup"
              search={{ redirect: search.redirect, email: search.email }}
              className="link"
            >
              Sign up here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
