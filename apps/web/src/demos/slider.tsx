import { Slider } from '@/components/ui/slider'

export function SliderDemo() {
  return (
    <div className="max-w-sm space-y-6">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  )
}
