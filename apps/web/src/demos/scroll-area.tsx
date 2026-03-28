import { ScrollArea } from '@/components/ui/scroll-area'

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-48 w-64 rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="text-sm">Item {i + 1}</div>
        ))}
      </div>
    </ScrollArea>
  )
}
