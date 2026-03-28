import { Separator } from '@/components/ui/separator'

export function SeparatorDemo() {
  return (
    <>
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Material Design</h4>
        <p className="text-sm text-muted-foreground">An open-source design system by Google.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </>
  )
}
