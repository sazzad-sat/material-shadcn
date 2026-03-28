import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-28 items-center justify-center">
          <span className="text-sm text-muted-foreground">Panel A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-28 items-center justify-center">
          <span className="text-sm text-muted-foreground">Panel B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
