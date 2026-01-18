import { mergeClassNames } from '@/utils/classnames'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={mergeClassNames(
        'bg-muted rounded-md animate-pulse',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
