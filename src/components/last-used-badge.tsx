import { Badge } from './ui/badge'

export default function LastUsedBadge() {
  return (
    <Badge
      variant="secondary"
      className="absolute top-0 right-0 translate-x-1/5 -translate-y-1/2"
    >
      Last used
    </Badge>
  )
}
