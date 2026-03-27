import type { ThemeTokens } from 'material-shadcn'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'
import { Switch } from './ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

interface ComponentPreviewProps {
  tokens: ThemeTokens
}

export function ComponentPreview({ tokens: _tokens }: ComponentPreviewProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>All button variants with Material 3 colors.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Badge variants for status indicators.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Form Controls</CardTitle>
          <CardDescription>Input fields and toggles.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="hello@example.com" />
          </div>
          <div className="flex items-center gap-3">
            <Switch id="notifications" />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
          <CardDescription>Tabbed content with Material 3 accent.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-3 text-sm text-muted-foreground">
              Material 3 generates harmonious color palettes from a single seed color using the HCT color space.
            </TabsContent>
            <TabsContent value="analytics" className="mt-3 text-sm text-muted-foreground">
              All colors maintain WCAG contrast ratios through Material 3's tonal system.
            </TabsContent>
            <TabsContent value="reports" className="mt-3 text-sm text-muted-foreground">
              shadcn/ui components work seamlessly with the generated tokens.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Color Tokens</CardTitle>
          <CardDescription>Generated CSS variables from your seed color.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              ['Primary', 'bg-primary', 'text-primary-foreground'],
              ['Secondary', 'bg-secondary', 'text-secondary-foreground'],
              ['Accent', 'bg-accent', 'text-accent-foreground'],
              ['Muted', 'bg-muted', 'text-muted-foreground'],
              ['Destructive', 'bg-destructive', 'text-destructive-foreground'],
              ['Card', 'bg-card', 'text-card-foreground'],
              ['Background', 'bg-background', 'text-foreground'],
              ['Border', 'bg-border', 'text-foreground'],
            ].map(([name, bg, text]) => (
              <div key={name} className="overflow-hidden rounded-lg border border-border">
                <div className={`${bg} ${text} px-3 py-4 text-center text-sm font-medium`}>
                  {name}
                </div>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-5 gap-2">
            {['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'].map((name) => (
              <div
                key={name}
                className="rounded-lg py-6"
                style={{ backgroundColor: `var(--${name})` }}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">Chart colors</p>
        </CardContent>
      </Card>
    </div>
  )
}
