import { AnonymousIcon, UserIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { format } from 'date-fns'
import { CardContent } from './ui/card'
import { Button } from './ui/button'
import type { Feedback } from '@/generated/prisma/client'
import { formatFeedbackType, getFeedbackTypeIcon } from '@/lib/format'
import { cn } from '@/utils/classnames'

export function FeedbackCard({
  feedback,
  withBorder,
}: {
  feedback: Feedback
  withBorder?: boolean
}) {
  const icon = getFeedbackTypeIcon(feedback.type)

  return (
    <CardContent
      className={cn(
        'p-3.5 flex flex-row gap-2.5 relative overflow-hidden',
        withBorder && ['border-l', icon.edgeClassName],
      )}
    >
      <HugeiconsIcon
        icon={icon.component}
        className={cn('size-4 translate-y-px', icon.className)}
      />

      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-2 justify-between flex-wrap">
          <p
            className={cn(
              'text-sm font-medium text-muted-foreground',
              icon.className,
            )}
          >
            {formatFeedbackType(feedback.type)}
          </p>

          <p className="text-xs text-muted-foreground">
            {format(feedback.createdAt, 'HH:mm')}
          </p>
        </div>

        <div className="space-y-3">
          <p className="whitespace-pre-line text-base">
            {feedback.description}
          </p>

          <div className="flex items-end gap-1.5">
            <HugeiconsIcon
              icon={feedback.email ? UserIcon : AnonymousIcon}
              className="size-4 text-muted-foreground"
            />

            <p className="text-xs text-muted-foreground">
              {feedback.email ?? 'Anonymous'}
            </p>

            {feedback.metadata && (
              <Button className="ml-auto -mt-1" variant="outline" size="xs">
                View metadata
              </Button>
            )}

            {/* <Button variant="secondary" size="xs"> */}
            {/*   Invite to chat */}
            {/* </Button> */}
          </div>
        </div>
      </div>
    </CardContent>
  )
}
