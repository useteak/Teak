import {
  AnonymousIcon,
  BugIcon,
  ChartIncreaseIcon,
  ChatQuestionIcon,
  Lightbulb,
  MessageIcon,
  PartyIcon,
  TriangleDashIcon,
  UserIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { format } from 'date-fns'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import type { Feedback } from '@/generated/prisma/client'
import { FeedbackType } from '@/generated/prisma/enums'
import { cn } from '@/lib/utils'

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
      return { component: BugIcon, className: 'text-destructive' }
    case FeedbackType.FEATURE_REQUEST:
      return { component: Lightbulb, className: 'text-amber-500' }
    case FeedbackType.IMPROVEMENT:
      return {
        component: ChartIncreaseIcon,
        className: 'text-indigo-500 dark:text-indigo-300',
      }
    case FeedbackType.QUESTION:
      return {
        component: ChatQuestionIcon,
        className: 'text-lime-500 dark:text-lime-300',
      }
    case FeedbackType.PRAISE:
      return { component: PartyIcon, className: 'text-foreground-primary' }
    case FeedbackType.OTHER:
      return { component: TriangleDashIcon, className: 'text-muted-foreground' }
  }
}

export function FeedbackCard({ feedback }: { feedback: Feedback }) {
  const icon = getFeedbackTypeIcon(feedback.type)

  return (
    <CardContent className="p-3.5 flex flex-row gap-3">
      <HugeiconsIcon
        icon={icon.component}
        className={cn('size-4 translate-y-0.5', icon.className)}
      />

      <div className="space-y-1 flex-1">
        <div className="flex items-center gap-2 justify-between flex-wrap">
          <CardTitle>{getFeedbackTypeLabel(feedback.type)}</CardTitle>

          <p className="text-xs text-muted-foreground">
            {format(feedback.createdAt, 'HH:mm')}
          </p>
        </div>

        <div className="space-y-3">
          <CardDescription className="whitespace-pre-line leading-relaxed">
            &ldquo;{feedback.description}&rdquo;
          </CardDescription>

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
