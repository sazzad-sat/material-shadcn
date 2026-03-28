import type { ComponentType } from 'react'

import { AccordionDemo } from './accordion'
import { AlertDemo } from './alert'
import { AlertDialogDemo } from './alert-dialog'
import { AspectRatioDemo } from './aspect-ratio'
import { AvatarDemo } from './avatar'
import { BadgeDemo } from './badge'
import { BreadcrumbDemo } from './breadcrumb'
import { ButtonDemo } from './button'
import { ButtonGroupDemo } from './button-group'
import { CalendarDemo } from './calendar'
import { CarouselDemo } from './carousel'
import { CardDemo } from './card'
import { ChartDemo } from './chart'
import { CheckboxDemo } from './checkbox'
import { CollapsibleDemo } from './collapsible'
import { ComboboxDemo } from './combobox'
import { CommandDemo } from './command'
import { ContextMenuDemo } from './context-menu'
import { DialogDemo } from './dialog'
import { DrawerDemo } from './drawer'
import { DropdownMenuDemo } from './dropdown-menu'
import { EmptyDemo } from './empty'
import { HoverCardDemo } from './hover-card'
import { InputDemo } from './input'
import { InputGroupDemo } from './input-group'
import { InputOTPDemo } from './input-otp'
import { ItemDemo } from './item'
import { KbdDemo } from './kbd'
import { LabelDemo } from './label'
import { MenubarDemo } from './menubar'
import { NativeSelectDemo } from './native-select'
import { NavigationMenuDemo } from './navigation-menu'
import { PaginationDemo } from './pagination'
import { PopoverDemo } from './popover'
import { ProgressDemo } from './progress'
import { RadioGroupDemo } from './radio-group'
import { ResizableDemo } from './resizable'
import { ScrollAreaDemo } from './scroll-area'
import { SelectDemo } from './select'
import { SeparatorDemo } from './separator'
import { SheetDemo } from './sheet'
import { SidebarDemo } from './sidebar'
import { SkeletonDemo } from './skeleton'
import { SliderDemo } from './slider'
import { SonnerDemo } from './sonner'
import { SpinnerDemo } from './spinner'
import { SwitchDemo } from './switch'
import { TableDemo } from './table'
import { TabsDemo } from './tabs'
import { TextareaDemo } from './textarea'
import { ToggleDemo } from './toggle'
import { ToggleGroupDemo } from './toggle-group'
import { TooltipDemo } from './tooltip'

export interface DemoSection {
  id: string
  label: string
  component: ComponentType
}

export const SECTIONS: DemoSection[] = [
  { id: 'accordion', label: 'Accordion', component: AccordionDemo },
  { id: 'alert', label: 'Alert', component: AlertDemo },
  { id: 'alert-dialog', label: 'Alert Dialog', component: AlertDialogDemo },
  { id: 'aspect-ratio', label: 'Aspect Ratio', component: AspectRatioDemo },
  { id: 'avatar', label: 'Avatar', component: AvatarDemo },
  { id: 'badge', label: 'Badge', component: BadgeDemo },
  { id: 'breadcrumb', label: 'Breadcrumb', component: BreadcrumbDemo },
  { id: 'button', label: 'Button', component: ButtonDemo },
  { id: 'button-group', label: 'Button Group', component: ButtonGroupDemo },
  { id: 'calendar', label: 'Calendar', component: CalendarDemo },
  { id: 'carousel', label: 'Carousel', component: CarouselDemo },
  { id: 'card', label: 'Card', component: CardDemo },
  { id: 'chart', label: 'Chart', component: ChartDemo },
  { id: 'checkbox', label: 'Checkbox', component: CheckboxDemo },
  { id: 'collapsible', label: 'Collapsible', component: CollapsibleDemo },
  { id: 'combobox', label: 'Combobox', component: ComboboxDemo },
  { id: 'command', label: 'Command', component: CommandDemo },
  { id: 'context-menu', label: 'Context Menu', component: ContextMenuDemo },
  { id: 'dialog', label: 'Dialog', component: DialogDemo },
  { id: 'drawer', label: 'Drawer', component: DrawerDemo },
  { id: 'dropdown-menu', label: 'Dropdown Menu', component: DropdownMenuDemo },
  { id: 'empty', label: 'Empty', component: EmptyDemo },
  { id: 'hover-card', label: 'Hover Card', component: HoverCardDemo },
  { id: 'input', label: 'Input', component: InputDemo },
  { id: 'input-group', label: 'Input Group', component: InputGroupDemo },
  { id: 'input-otp', label: 'Input OTP', component: InputOTPDemo },
  { id: 'item', label: 'Item', component: ItemDemo },
  { id: 'kbd', label: 'Kbd', component: KbdDemo },
  { id: 'label', label: 'Label', component: LabelDemo },
  { id: 'menubar', label: 'Menubar', component: MenubarDemo },
  { id: 'native-select', label: 'Native Select', component: NativeSelectDemo },
  { id: 'navigation-menu', label: 'Navigation Menu', component: NavigationMenuDemo },
  { id: 'pagination', label: 'Pagination', component: PaginationDemo },
  { id: 'popover', label: 'Popover', component: PopoverDemo },
  { id: 'progress', label: 'Progress', component: ProgressDemo },
  { id: 'radio-group', label: 'Radio Group', component: RadioGroupDemo },
  { id: 'resizable', label: 'Resizable', component: ResizableDemo },
  { id: 'scroll-area', label: 'Scroll Area', component: ScrollAreaDemo },
  { id: 'select', label: 'Select', component: SelectDemo },
  { id: 'separator', label: 'Separator', component: SeparatorDemo },
  { id: 'sheet', label: 'Sheet', component: SheetDemo },
  { id: 'sidebar', label: 'Sidebar', component: SidebarDemo },
  { id: 'skeleton', label: 'Skeleton', component: SkeletonDemo },
  { id: 'slider', label: 'Slider', component: SliderDemo },
  { id: 'sonner', label: 'Sonner', component: SonnerDemo },
  { id: 'spinner', label: 'Spinner', component: SpinnerDemo },
  { id: 'switch', label: 'Switch', component: SwitchDemo },
  { id: 'table', label: 'Table', component: TableDemo },
  { id: 'tabs', label: 'Tabs', component: TabsDemo },
  { id: 'textarea', label: 'Textarea', component: TextareaDemo },
  { id: 'toggle', label: 'Toggle', component: ToggleDemo },
  { id: 'toggle-group', label: 'Toggle Group', component: ToggleGroupDemo },
  { id: 'tooltip', label: 'Tooltip', component: TooltipDemo },
]
