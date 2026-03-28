import { Kbd } from '@/components/ui/kbd'

export function KbdDemo() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>Ctrl</Kbd>
      <span className="text-muted-foreground">+</span>
      <Kbd>C</Kbd>
      <span className="ml-4 text-sm text-muted-foreground">Copy to clipboard</span>
    </div>
  )
}
