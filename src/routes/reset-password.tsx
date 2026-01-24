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
import { createSeoMeta } from '@/lib/seo'
import { config } from '@/config'

const requestSchema = z.object({
  email: z.email('Please enter a valid email').trim(),
})

const resetSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(72, 'Password must be at most 72 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const Route = createFileRoute('/reset-password')({
  component: RouteComponent,
  validateSearch: z.object({
    token: z.string().optional(),
    email: z.string().optional(),
    error: z.string().optional(),
  }),
  head: () => ({
    meta: createSeoMeta({ title: 'Reset password' }),
  }),
  server: {
    middleware: [authMiddleware(false)],
  },
})

function RouteComponent() {
  const search = Route.useSearch()

  if (search.token) {
    return <ResetPasswordForm token={search.token} error={search.error} />
  }

  return <RequestResetForm defaultEmail={search.email} />
}

function RequestResetForm({ defaultEmail }: { defaultEmail?: string }) {
  const [emailSent, setEmailSent] = useState(false)

  const form = useForm({
    defaultValues: {
      email: defaultEmail ?? '',
    },
    validators: {
      onSubmit: requestSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await authClient.requestPasswordReset({
          email: value.email,
          redirectTo: '/reset-password',
        })
        setEmailSent(true)
        toast.success('Check your email for a reset link')
      } catch {
        toast.error('Failed to send reset email')
      }
    },
  })

  if (emailSent) {
    return (
      <div className="flex items-center justify-center h-svh">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Check your email</CardTitle>
            <CardDescription>
              We've sent a password reset link to your email address. Click the
              link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex-col gap-4 py-5">
            <p className="text-sm text-muted-foreground">
              Didn't receive an email?{' '}
              <button
                type="button"
                className="link"
                onClick={() => setEmailSent(false)}
              >
                Try again
              </button>
            </p>
            <p className="text-sm text-muted-foreground">
              <Link to="/login" className="link">
                Back to login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center h-svh">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your
            password.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id="request-reset-form"
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
                        placeholder="janedoe@myspace.com"
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
                form="request-reset-form"
                type="submit"
              >
                {isSubmitting ? 'Sending…' : 'Send reset link'}
              </Button>
            )}
          />
          <p className="text-sm text-muted-foreground">
            Remember your password?{' '}
            <Link to="/login" className="link">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

function ResetPasswordForm({
  token,
  error,
}: {
  token: string
  error?: string | null
}) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: resetSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const { error: resetError } = await authClient.resetPassword({
          newPassword: value.newPassword,
          token,
        })

        if (resetError) {
          toast.error(resetError.message ?? 'Failed to reset password')
          return
        }

        toast.success('Password reset successfully')
        navigate({ to: '/login' })
      } catch {
        toast.error('Failed to reset password')
      }
    },
  })

  return (
    <div className="flex items-center justify-center h-svh">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Set new password</CardTitle>
          <CardDescription>
            Enter your new password for your {config.productName} account.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error === 'INVALID_TOKEN'
                ? 'This reset link is invalid or has expired.'
                : error}
              <p className="mt-2">
                <Link to="/reset-password" className="link">
                  Request a new reset link
                </Link>
              </p>
            </div>
          )}

          <form
            id="reset-password-form"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              <form.Field
                name="newPassword"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>New Password</FieldLabel>
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
                          autoComplete="new-password"
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
                      <InputGroup>
                        <InputGroupInput
                          id={field.name}
                          name={field.name}
                          placeholder="•••••••••••"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="new-password"
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            size="icon-xs"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            aria-label={
                              showConfirmPassword
                                ? 'Hide password'
                                : 'Show password'
                            }
                          >
                            <HugeiconsIcon
                              icon={
                                showConfirmPassword ? ViewOffIcon : ViewIcon
                              }
                            />
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
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
                form="reset-password-form"
                type="submit"
              >
                {isSubmitting ? 'Resetting…' : 'Reset password'}
              </Button>
            )}
          />
          <p className="text-sm text-muted-foreground">
            <Link to="/login" className="link">
              Back to login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
