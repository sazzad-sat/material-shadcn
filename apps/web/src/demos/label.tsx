import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function LabelDemo() {
  return (
    <div className="grid max-w-sm gap-2">
      <Label htmlFor="label-demo">Email address</Label>
      <Input id="label-demo" placeholder="you@example.com" />
    </div>
  )
}
