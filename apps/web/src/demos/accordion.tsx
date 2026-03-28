import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Material 3?</AccordionTrigger>
        <AccordionContent>
          Material 3 is Google's latest open-source design system with expressive theming, dynamic color, and updated components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does dynamic color work?</AccordionTrigger>
        <AccordionContent>
          A single seed color generates a full palette using the HCT color space, producing harmonious tonal palettes for primary, secondary, tertiary, and error roles.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it compatible with shadcn/ui?</AccordionTrigger>
        <AccordionContent>
          Yes — this library maps Material 3 color tokens to shadcn/ui CSS variables, so you get M3 colors without changing any component code.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
