import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'

export function SonnerDemo() {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => toast('Event has been created')}>Default</Button>
        <Button variant="outline" onClick={() => toast.success('Successfully saved!')}>Success</Button>
        <Button variant="outline" onClick={() => toast.error('Something went wrong')}>Error</Button>
        <Button variant="outline" onClick={() => toast.info('New update available')}>Info</Button>
      </div>
      <Toaster />
    </>
  )
}
