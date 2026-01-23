import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { CopyIcon, Tick02Icon } from '@hugeicons/core-free-icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type ApiEndpointHeaderProps = {
  method: string
  path: string
}

export function ApiEndpointHeader({ method, path }: ApiEndpointHeaderProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(path)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>{method}</Badge>
      <code>{path}</code>
      <Button
        variant="ghost"
        size="icon-sm"
        className="ml-auto"
        onClick={handleCopy}
      >
        <HugeiconsIcon icon={copied ? Tick02Icon : CopyIcon} />
        <span className="sr-only">{copied ? 'Copied' : 'Copy'}</span>
      </Button>
    </div>
  )
}
