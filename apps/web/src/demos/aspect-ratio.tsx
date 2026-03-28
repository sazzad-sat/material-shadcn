import { AspectRatio } from '@/components/ui/aspect-ratio'

export function AspectRatioDemo() {
  return (
    <div className="w-72">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
          16:9
        </div>
      </AspectRatio>
    </div>
  )
}
