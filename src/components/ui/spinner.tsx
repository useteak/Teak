import { HugeiconsIcon } from '@hugeicons/react'
import { Loading03Icon } from '@hugeicons/core-free-icons'
import { mergeClassNames } from '@/utils/classnames'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <HugeiconsIcon
      icon={Loading03Icon}
      strokeWidth={2}
      role="status"
      aria-label="Loading"
      className={mergeClassNames('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
