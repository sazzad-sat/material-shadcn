import { useState } from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

export function CollapsibleDemo() {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-80">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">3 items</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">{open ? 'Hide' : 'Show'}</Button>
        </CollapsibleTrigger>
      </div>
      <div className="mt-2 rounded-md border px-4 py-2 text-sm">Item 1</div>
      <CollapsibleContent className="space-y-2 mt-2">
        <div className="rounded-md border px-4 py-2 text-sm">Item 2</div>
        <div className="rounded-md border px-4 py-2 text-sm">Item 3</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
