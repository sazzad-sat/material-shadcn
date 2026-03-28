import { Toggle } from '@/components/ui/toggle'

export function ToggleDemo() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold"><span className="font-bold">B</span></Toggle>
      <Toggle aria-label="Toggle italic"><span className="italic">I</span></Toggle>
      <Toggle variant="outline" aria-label="Toggle underline"><span className="underline">U</span></Toggle>
    </div>
  )
}
