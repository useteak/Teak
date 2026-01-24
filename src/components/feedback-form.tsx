import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { HugeiconsIcon } from '@hugeicons/react'
import { z } from 'zod'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Field, FieldError, FieldGroup, FieldLabel } from './ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { FeedbackType } from '@/generated/prisma/enums'
import { formatFeedbackType, getFeedbackTypeIcon } from '@/lib/format'
import { config } from '@/config'
import { FeedbackTypeSchema } from '@/generated/zod/schemas/enums/FeedbackType.schema'

const feedbackFormSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  type: FeedbackTypeSchema,
})

const defaultValues: z.infer<typeof feedbackFormSchema> = {
  type: FeedbackType.BUG,
  description: '',
}

export default function FeedbackForm({
  userEmail,
  onClose,
}: {
  onClose: () => void
  userEmail?: string
}) {
  // Form state
  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: feedbackFormSchema,
    },
    onSubmit: async ({ value }) => {
      // try {
      //
      // } catch {
      //   toast.error('Failed to send feedback')
      // }

      return fetch(
        'https://www.useteak.com/api/v1/cmkse6kay00000any2fuewlvz/projects/cmkse6z0d00010anyecemx7nj/feedback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description: value.description,
            type: value.type,
            email: userEmail,
          }),
        },
      )
        .then(() => {
          toast.success('Thank you for your feedback!')
          onClose()
        })
        .catch(() => {
          toast.error('Failed to send feedback')
        })
    },
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <p className="font-medium text-lg">Send feedback</p>
        <p className="text-sm text-muted-foreground text-balance">
          Sending feedback helps us build a better {config.productName}. We
          really appreciate it!
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <form
          id="feedback-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="type"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel>Type</FieldLabel>
                    <Select
                      name={field.name}
                      aria-invalid={isInvalid}
                      value={field.state.value}
                      onValueChange={(newType) =>
                        field.handleChange(newType as FeedbackType)
                      }
                    >
                      <SelectTrigger id={field.name}>
                        <SelectValue placeholder="Choose a type..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {Object.values(FeedbackType).map((type) => {
                            const icon = getFeedbackTypeIcon(type)

                            return (
                              <SelectItem value={type} key={type}>
                                <HugeiconsIcon
                                  icon={icon.component}
                                  className={icon.className}
                                />
                                {formatFeedbackType(type)}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />

            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel>Feedback</FieldLabel>
                    <Textarea
                      rows={6}
                      autoFocus
                      id={field.name}
                      name={field.name}
                      className="resize-none"
                      aria-invalid={isInvalid}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      placeholder="I found a bug on the..."
                      onChange={(e) => field.handleChange(e.target.value)}
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

        <div className="justify-end flex items-center gap-2">
          <Button variant="outline" size="sm" type="button" onClick={onClose}>
            Cancel
          </Button>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                size="sm"
                type="submit"
                form="feedback-form"
                disabled={isSubmitting || !canSubmit}
              >
                {isSubmitting ? 'Sending…' : 'Send'}
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  )
}
