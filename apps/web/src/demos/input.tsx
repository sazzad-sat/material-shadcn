import { Input } from '@/components/ui/input'

export function InputDemo() {
  return (
    <div className="grid max-w-sm gap-3">
      <Input placeholder="Default input" />
      <Input type="email" placeholder="Email" />
      <Input disabled placeholder="Disabled" />
    </div>
  )
}
