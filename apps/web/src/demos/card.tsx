import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CardDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description with muted foreground.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Content area using card background and foreground tokens.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Another Card</CardTitle>
          <CardDescription>Demonstrating the card surface color.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Cards use the M3 surface container color mapped to --card.</p>
        </CardContent>
      </Card>
    </div>
  )
}
