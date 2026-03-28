import { Spinner } from '@/components/ui/spinner'

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  )
}
