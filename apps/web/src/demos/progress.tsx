import { Progress } from '@/components/ui/progress'

export function ProgressDemo() {
  return (
    <div className="max-w-sm space-y-4">
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
    </div>
  )
}
