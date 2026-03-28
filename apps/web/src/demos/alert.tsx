import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

export function AlertDemo() {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert using the primary color tokens.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
    </div>
  )
}
