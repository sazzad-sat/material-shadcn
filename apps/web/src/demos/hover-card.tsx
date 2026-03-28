import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@material-shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">material-shadcn</h4>
          <p className="text-sm text-muted-foreground">
            Material 3 color system for shadcn/ui components.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
