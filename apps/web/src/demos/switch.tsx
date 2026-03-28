import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
