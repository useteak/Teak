import {
  AnonymousIcon,
  BugIcon,
  ChartIncreaseIcon,
  ChatQuestionIcon,
  Lightbulb,
  PartyIcon,
  TriangleDashIcon,
  UserIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { format } from 'date-fns'
import { CardContent } from './ui/card'
import type { Feedback } from '@/generated/prisma/client'
import { FeedbackType } from '@/generated/prisma/enums'
import { mergeClassNames } from '@/utils/classnames'

function getFeedbackTypeLabel(type: FeedbackType) {
  switch (type) {
    case FeedbackType.BUG:
      return 'Bug'
    case FeedbackType.FEATURE_REQUEST:
      return 'Feature Request'
    case FeedbackType.IMPROVEMENT:
      return 'Improvement'
    case FeedbackType.QUESTION:
      return 'Question'
    case FeedbackType.PRAISE:
      return 'Praise'
    case FeedbackType.OTHER:
      return 'Other'
  }
}

function getFeedbackTypeIcon(type: FeedbackType) {
  switch (type) {
    case FeedbackType.BUG:
      return {
        component: BugIcon,
        className: 'text-destructive',
        edgeClassName: 'border-l-destructive',
      }
    case FeedbackType.FEATURE_REQUEST:
      return {
        component: Lightbulb,
        className: 'text-amber-600 dark:text-amber-500',
        edgeClassName: 'border-l-amber-500',
      }
    case FeedbackType.IMPROVEMENT:
      return {
        component: ChartIncreaseIcon,
        className: 'text-indigo-500 dark:text-indigo-300',
        edgeClassName: 'border-l-indigo-500 dark:border-l-indigo-300',
      }
    case FeedbackType.QUESTION:
      return {
        component: ChatQuestionIcon,
        className: 'text-lime-500 dark:text-lime-300',
        edgeClassName: 'border-l-lime-500 dark:border-l-lime-300',
      }
    case FeedbackType.PRAISE:
      return {
        component: PartyIcon,
        className: 'text-foreground-primary',
        edgeClassName: 'border-l-foreground-primary',
      }
    case FeedbackType.OTHER:
      return {
        component: TriangleDashIcon,
        className: 'text-muted-foreground',
        edgeClassName: 'border-l-muted-foreground',
      }
  }
}

export function FeedbackCard({ feedback }: { feedback: Feedback }) {
  const icon = getFeedbackTypeIcon(feedback.type)

  return (
    <CardContent
      className={mergeClassNames(
        'p-3.5 flex flex-row gap-2.5 relative overflow-hidden border-l',
        icon.edgeClassName,
      )}
    >
      <HugeiconsIcon
        icon={icon.component}
        className={mergeClassNames('size-4', icon.className)}
      />

      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-2 justify-between flex-wrap">
          <p
            className={mergeClassNames(
              'text-xs font-medium uppercase tracking-widest font-condensed',
              icon.className,
            )}
          >
            {getFeedbackTypeLabel(feedback.type)}
          </p>

          <p className="text-xs text-muted-foreground">
            {format(feedback.createdAt, 'HH:mm')}
          </p>
        </div>

        <div className="space-y-3">
          <p className="whitespace-pre-line text-base">
            &ldquo;{feedback.description}&rdquo;
          </p>

          <div className="flex items-center gap-1.5">
            <HugeiconsIcon
              icon={feedback.email ? UserIcon : AnonymousIcon}
              className="size-4 text-muted-foreground"
            />

            <p className="text-xs text-muted-foreground">
              {feedback.email ?? 'Anonymous'}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  )
}
