import { randomBytes } from 'node:crypto'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { addDays } from 'date-fns'
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
import { getBaseUrlFromHeaders } from '@/utils/server-url'
import { resend, resendFromEmail } from '@/lib/resend'
import { prisma } from '@/lib/database'

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

const inviteUserToOrganization = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({
      organizationId: z.string(),
      email: z
        .string()
        .trim()
        .toLowerCase()
        .email('Please enter a valid email'),
    }),
  )
  .handler(async ({ data }) => {
    const headers = getRequestHeaders()
    const session = await auth.api.getSession({ headers })

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

    const existingMember = await prisma.user.findFirst({
      where: {
        email: data.email,
        organizations: { some: { id: organization.id } },
      },
      select: { id: true },
    })

    if (existingMember) {
      return { status: 'already_member' as const }
    }

    const now = new Date()
    const existingInvite = await prisma.organizationInvitation.findFirst({
      where: {
        organizationId: organization.id,
        email: data.email,
        acceptedAt: null,
        revokedAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    const invite = await prisma.$transaction(async (tx) => {
      if (existingInvite && existingInvite.expiresAt > now) {
        return existingInvite
      }

      if (existingInvite) {
        await tx.organizationInvitation.update({
          where: { id: existingInvite.id },
          data: { revokedAt: now },
        })
      }

      return await tx.organizationInvitation.create({
        data: {
          organizationId: organization.id,
          email: data.email,
          token: randomBytes(32).toString('hex'),
          expiresAt: addDays(now, 7),
          createdByUserId: session.user.id,
        },
      })
    })

    const baseUrl = getBaseUrlFromHeaders(headers)
    const acceptUrl = `${baseUrl}/invite/${invite.token}`

    await resend.emails.send({
      from: resendFromEmail,
      to: data.email,
      subject: `You're invited to join ${organization.name}`,
      html: `<p>${session.user.name} invited you to join <strong>${organization.name}</strong>.</p><p><a href="${acceptUrl}">Accept invitation</a></p><p>This invitation expires in 7 days.</p>`,
    })

    return { status: 'sent' as const }
  })

const formSchema = z.object({
  email: z.email('Please enter a valid email'),
})

export const Route = createFileRoute(
  '/_authenticated/$organizationId/settings/members/invite',
)({
  component: RouteComponent,
  loader: ({ params }) =>
    getData({
      data: {
        organizationId: params.organizationId,
      },
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
  const [isInviting, setIsInviting] = useState<boolean>(false)

  // Form state
  const form = useForm({
    defaultValues: {
      email: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      setIsInviting(true)
      try {
        const result = await inviteUserToOrganization({
          data: {
            organizationId: params.organizationId,
            email: value.email,
          },
        })

        if (result.status === 'already_member') {
          toast.info('Already a member')
        } else {
          toast.success('Invitation sent')
        }

        setIsOpen(false)
        navigate({
          to: '/$organizationId/settings/members',
          params: {
            organizationId: params.organizationId,
          },
        })
      } catch {
        toast.error('Failed to invite member')
      } finally {
        setIsInviting(false)
      }
    },
  })

  // Handlers
  function handleClose() {
    setIsOpen(false)

    setTimeout(() => {
      navigate({
        to: '/$organizationId/settings/members',
        params: {
          organizationId: params.organizationId,
        },
      })
    }, 200)
  }

  function handleOpenChange(open: boolean) {
    if (isInviting) return

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
          <DialogTitle>Invite member</DialogTitle>
          <DialogDescription>
            Invite a member to{' '}
            {organization?.name ? (
              <span className="font-medium">{organization.name}</span>
            ) : (
              'your organization'
            )}
            .
          </DialogDescription>
        </DialogHeader>

        <form
          id="invite-member-form"
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
                      disabled={isInviting}
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

        <DialogFooter>
          <Button type="button" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                form="invite-member-form"
                disabled={isInviting || isSubmitting || !canSubmit}
              >
                {isSubmitting ? 'Inviting…' : 'Invite'}
              </Button>
            )}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
