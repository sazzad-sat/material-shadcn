import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold"><span className="font-bold">B</span></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic"><span className="italic">I</span></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline"><span className="underline">U</span></ToggleGroupItem>
    </ToggleGroup>
  )
}
