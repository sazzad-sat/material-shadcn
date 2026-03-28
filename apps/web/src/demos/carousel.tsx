import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

export function CarouselDemo() {
  return (
    <div className="mx-auto w-full max-w-xs px-12">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={i}>
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted text-3xl font-semibold">
                {i + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
