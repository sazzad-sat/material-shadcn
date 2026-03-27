import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from '../../registry/theme'

// UI components
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader,
  AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction,
} from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import {
  Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator,
} from '@/components/ui/command'
import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuSeparator, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent,
} from '@/components/ui/context-menu'
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter,
} from '@/components/ui/dialog'
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
  DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from '@/components/ui/drawer'
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Input } from '@/components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@/components/ui/menubar'
import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis,
} from '@/components/ui/pagination'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption,
} from '@/components/ui/table'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { Kbd } from '@/components/ui/kbd'
import { Spinner } from '@/components/ui/spinner'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from '@/components/ui/combobox'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '@/components/ui/empty'
import { Item, ItemGroup, ItemSeparator, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from '@/components/ui/item'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'
import { SearchIcon, MailIcon, InboxIcon, HomeIcon, SettingsIcon, UsersIcon, FileIcon, StarIcon } from 'lucide-react'

export const Route = createFileRoute('/components')({
  component: Components,
})

const SECTIONS = [
  { id: 'accordion', label: 'Accordion' },
  { id: 'alert', label: 'Alert' },
  { id: 'alert-dialog', label: 'Alert Dialog' },
  { id: 'aspect-ratio', label: 'Aspect Ratio' },
  { id: 'avatar', label: 'Avatar' },
  { id: 'badge', label: 'Badge' },
  { id: 'breadcrumb', label: 'Breadcrumb' },
  { id: 'button', label: 'Button' },
  { id: 'button-group', label: 'Button Group' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'carousel', label: 'Carousel' },
  { id: 'card', label: 'Card' },
  { id: 'chart', label: 'Chart' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'collapsible', label: 'Collapsible' },
  { id: 'combobox', label: 'Combobox' },
  { id: 'command', label: 'Command' },
  { id: 'context-menu', label: 'Context Menu' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'drawer', label: 'Drawer' },
  { id: 'dropdown-menu', label: 'Dropdown Menu' },
  { id: 'empty', label: 'Empty' },
  { id: 'hover-card', label: 'Hover Card' },
  { id: 'input', label: 'Input' },
  { id: 'input-group', label: 'Input Group' },
  { id: 'input-otp', label: 'Input OTP' },
  { id: 'item', label: 'Item' },
  { id: 'kbd', label: 'Kbd' },
  { id: 'label', label: 'Label' },
  { id: 'menubar', label: 'Menubar' },
  { id: 'native-select', label: 'Native Select' },
  { id: 'navigation-menu', label: 'Navigation Menu' },
  { id: 'pagination', label: 'Pagination' },
  { id: 'popover', label: 'Popover' },
  { id: 'progress', label: 'Progress' },
  { id: 'radio-group', label: 'Radio Group' },
  { id: 'resizable', label: 'Resizable' },
  { id: 'scroll-area', label: 'Scroll Area' },
  { id: 'select', label: 'Select' },
  { id: 'separator', label: 'Separator' },
  { id: 'sheet', label: 'Sheet' },
  { id: 'sidebar', label: 'Sidebar' },
  { id: 'skeleton', label: 'Skeleton' },
  { id: 'slider', label: 'Slider' },
  { id: 'sonner', label: 'Sonner' },
  { id: 'spinner', label: 'Spinner' },
  { id: 'switch', label: 'Switch' },
  { id: 'table', label: 'Table' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'textarea', label: 'Textarea' },
  { id: 'toggle', label: 'Toggle' },
  { id: 'toggle-group', label: 'Toggle Group' },
  { id: 'tooltip', label: 'Tooltip' },
]

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>
      <div className="rounded-xl border border-dashed border-border p-6">
        {children}
      </div>
    </section>
  )
}

function Components() {
  const { colorMode, cycleColorMode } = useTheme()
  const [search, setSearch] = useState('')
  const [activeId, setActiveId] = useState('')
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [collapsibleOpen, setCollapsibleOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-10% 0px -80% 0px' }
    )
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const filteredSections = SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  )

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-14">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
                material-shadcn
              </Link>
              <nav className="hidden items-center gap-1 sm:flex">
                <Link to="/docs" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Docs</Link>
                <Link to="/components" className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground">Components</Link>
                <Link to="/charts" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Charts</Link>
              </nav>
            </div>
            <div className="flex items-center gap-1">
              <span className="hidden text-xs text-muted-foreground sm:inline mr-2">
                {SECTIONS.length} components
              </span>
              <a
                href="https://github.com/sazzad/material-shadcn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <button
                onClick={cycleColorMode}
                className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                title={colorMode === 'system' ? 'System theme' : colorMode === 'light' ? 'Light theme' : 'Dark theme'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {colorMode === 'dark' ? (
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  ) : colorMode === 'light' ? (
                    <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></>
                  ) : (
                    <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-border p-4 lg:block">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-3 w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <nav className="flex flex-col gap-0.5">
              {filteredSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`rounded-md px-2 py-1 text-left text-xs transition-colors ${
                    activeId === s.id
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main ref={mainRef} className="flex-1 space-y-8 p-6 lg:p-8">
            <div className="mb-2">
              <h1 className="text-2xl font-bold tracking-tight">All Components</h1>
              <p className="text-sm text-muted-foreground">
                Every shadcn/ui component themed with Material 3 colors.
              </p>
            </div>

            <Section id="accordion" title="Accordion">
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
            </Section>

            <Section id="alert" title="Alert">
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
            </Section>

            <Section id="alert-dialog" title="Alert Dialog">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Open Alert Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your data.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Section>

            <Section id="aspect-ratio" title="Aspect Ratio">
              <div className="w-72">
                <AspectRatio ratio={16 / 9}>
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
                    16:9
                  </div>
                </AspectRatio>
              </div>
            </Section>

            <Section id="avatar" title="Avatar">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </Section>

            <Section id="badge" title="Badge">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </Section>

            <Section id="breadcrumb" title="Breadcrumb">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Section>

            <Section id="button" title="Button">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </Section>

            <Section id="button-group" title="Button Group">
              <div className="space-y-4">
                <ButtonGroup>
                  <Button variant="outline">Left</Button>
                  <ButtonGroupSeparator />
                  <Button variant="outline">Center</Button>
                  <ButtonGroupSeparator />
                  <Button variant="outline">Right</Button>
                </ButtonGroup>
                <ButtonGroup orientation="vertical">
                  <Button variant="outline">Top</Button>
                  <ButtonGroupSeparator orientation="horizontal" />
                  <Button variant="outline">Middle</Button>
                  <ButtonGroupSeparator orientation="horizontal" />
                  <Button variant="outline">Bottom</Button>
                </ButtonGroup>
              </div>
            </Section>

            <Section id="calendar" title="Calendar">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </Section>

            <Section id="carousel" title="Carousel">
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
            </Section>

            <Section id="card" title="Card">
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
            </Section>

            <Section id="chart" title="Chart">
              <div className="w-full max-w-md">
                <ChartContainer className="aspect-auto h-48 w-full" config={{
                  value: { label: "Value", theme: { light: "oklch(0.491 0.092 295.5)", dark: "oklch(0.836 0.092 297.1)" } },
                }}>
                  <BarChart data={[
                    { name: "Jan", value: 186 },
                    { name: "Feb", value: 305 },
                    { name: "Mar", value: 237 },
                    { name: "Apr", value: 173 },
                    { name: "May", value: 209 },
                  ]}>
                    <XAxis dataKey="name" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </BarChart>
                </ChartContainer>
              </div>
            </Section>

            <Section id="checkbox" title="Checkbox">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" defaultChecked />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
              </div>
            </Section>

            <Section id="collapsible" title="Collapsible">
              <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="w-80">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">3 items</span>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      {collapsibleOpen ? 'Hide' : 'Show'}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="mt-2 rounded-md border px-4 py-2 text-sm">Item 1</div>
                <CollapsibleContent className="space-y-2 mt-2">
                  <div className="rounded-md border px-4 py-2 text-sm">Item 2</div>
                  <div className="rounded-md border px-4 py-2 text-sm">Item 3</div>
                </CollapsibleContent>
              </Collapsible>
            </Section>

            <Section id="combobox" title="Combobox">
              <Combobox>
                <ComboboxInput placeholder="Search a framework..." className="max-w-xs" />
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxEmpty>No results found.</ComboboxEmpty>
                    <ComboboxItem value="react" textValue="React">React</ComboboxItem>
                    <ComboboxItem value="vue" textValue="Vue">Vue</ComboboxItem>
                    <ComboboxItem value="svelte" textValue="Svelte">Svelte</ComboboxItem>
                    <ComboboxItem value="angular" textValue="Angular">Angular</ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Section>

            <Section id="command" title="Command">
              <Command className="max-w-sm rounded-lg border">
                <CommandInput placeholder="Type a command..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search</CommandItem>
                    <CommandItem>Settings</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Actions">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </Section>

            <Section id="context-menu" title="Context Menu">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-28 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                  Right-click here
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Back</ContextMenuItem>
                  <ContextMenuItem>Forward</ContextMenuItem>
                  <ContextMenuItem>Reload</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuSub>
                    <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent>
                      <ContextMenuItem>Save Page As...</ContextMenuItem>
                      <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                </ContextMenuContent>
              </ContextMenu>
            </Section>

            <Section id="dialog" title="Dialog">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Section>

            <Section id="drawer" title="Drawer">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Section>

            <Section id="dropdown-menu" title="Dropdown Menu">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Section>

            <Section id="empty" title="Empty">
              <Empty className="border">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <InboxIcon />
                  </EmptyMedia>
                  <EmptyTitle>No results found</EmptyTitle>
                  <EmptyDescription>
                    Try adjusting your search or filters to find what you're looking for.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </Section>

            <Section id="hover-card" title="Hover Card">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@material-shadcn</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-72">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">material-shadcn</h4>
                    <p className="text-sm text-muted-foreground">
                      Material 3 color system for shadcn/ui components.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </Section>

            <Section id="input" title="Input">
              <div className="grid max-w-sm gap-3">
                <Input placeholder="Default input" />
                <Input type="email" placeholder="Email" />
                <Input disabled placeholder="Disabled" />
              </div>
            </Section>

            <Section id="input-group" title="Input Group">
              <div className="space-y-4 max-w-sm">
                <InputGroup>
                  <InputGroupAddon>
                    <SearchIcon className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput placeholder="Search..." />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon>
                    <MailIcon className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput placeholder="Email address" />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>@example.com</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </Section>

            <Section id="input-otp" title="Input OTP">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </Section>

            <Section id="item" title="Item">
              <ItemGroup className="max-w-md divide-y rounded-lg border">
                <Item>
                  <ItemMedia variant="icon">
                    <FileIcon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Project Proposal</ItemTitle>
                    <ItemDescription>Last edited 2 hours ago</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button variant="ghost" size="icon"><StarIcon className="size-4" /></Button>
                  </ItemActions>
                </Item>
                <Item>
                  <ItemMedia variant="icon">
                    <FileIcon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Meeting Notes</ItemTitle>
                    <ItemDescription>Last edited yesterday</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button variant="ghost" size="icon"><StarIcon className="size-4" /></Button>
                  </ItemActions>
                </Item>
              </ItemGroup>
            </Section>

            <Section id="kbd" title="Kbd">
              <div className="flex items-center gap-2">
                <Kbd>Ctrl</Kbd>
                <span className="text-muted-foreground">+</span>
                <Kbd>C</Kbd>
                <span className="ml-4 text-sm text-muted-foreground">Copy to clipboard</span>
              </div>
            </Section>

            <Section id="label" title="Label">
              <div className="grid max-w-sm gap-2">
                <Label htmlFor="label-demo">Email address</Label>
                <Input id="label-demo" placeholder="you@example.com" />
              </div>
            </Section>

            <Section id="menubar" title="Menubar">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Zoom In</MenubarItem>
                    <MenubarItem>Zoom Out</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </Section>

            <Section id="native-select" title="Native Select">
              <div className="flex flex-wrap gap-4">
                <NativeSelect>
                  <NativeSelectOption value="">Select a fruit...</NativeSelectOption>
                  <NativeSelectOption value="apple">Apple</NativeSelectOption>
                  <NativeSelectOption value="banana">Banana</NativeSelectOption>
                  <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
                </NativeSelect>
                <NativeSelect size="sm">
                  <NativeSelectOption value="">Small select...</NativeSelectOption>
                  <NativeSelectOption value="a">Option A</NativeSelectOption>
                  <NativeSelectOption value="b">Option B</NativeSelectOption>
                </NativeSelect>
              </div>
            </Section>

            <Section id="navigation-menu" title="Navigation Menu">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        <NavigationMenuLink className="rounded-md p-3 hover:bg-accent">
                          <div className="text-sm font-medium">Introduction</div>
                          <p className="text-xs text-muted-foreground">A brief overview of the library.</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="rounded-md p-3 hover:bg-accent">
                          <div className="text-sm font-medium">Installation</div>
                          <p className="text-xs text-muted-foreground">How to install and set up.</p>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        <NavigationMenuLink className="rounded-md p-3 hover:bg-accent">
                          <div className="text-sm font-medium">Button</div>
                          <p className="text-xs text-muted-foreground">Displays a button.</p>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </Section>

            <Section id="pagination" title="Pagination">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </Section>

            <Section id="popover" title="Popover">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Dimensions</h4>
                      <p className="text-xs text-muted-foreground">Set the dimensions for the layer.</p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="width">Width</Label>
                      <Input id="width" defaultValue="100%" />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </Section>

            <Section id="progress" title="Progress">
              <div className="max-w-sm space-y-4">
                <Progress value={25} />
                <Progress value={50} />
                <Progress value={75} />
              </div>
            </Section>

            <Section id="radio-group" title="Radio Group">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </Section>

            <Section id="resizable" title="Resizable">
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
            </Section>

            <Section id="scroll-area" title="Scroll Area">
              <ScrollArea className="h-48 w-64 rounded-md border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="text-sm">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Section>

            <Section id="select" title="Select">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="cherry">Cherry</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                </SelectContent>
              </Select>
            </Section>

            <Section id="separator" title="Separator">
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
            </Section>

            <Section id="sheet" title="Sheet">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile. Click save when done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 p-4">
                    <div className="grid gap-2">
                      <Label htmlFor="sheet-name">Name</Label>
                      <Input id="sheet-name" defaultValue="John Doe" />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </Section>

            <Section id="sidebar" title="Sidebar">
              <div className="h-64 overflow-hidden rounded-lg border">
                <SidebarProvider defaultOpen={true}>
                  <Sidebar collapsible="none" className="w-52">
                    <SidebarHeader className="border-b px-4 py-3">
                      <span className="text-sm font-semibold">App Name</span>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton isActive><HomeIcon className="size-4" /><span>Home</span></SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton><UsersIcon className="size-4" /><span>Users</span></SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton><SettingsIcon className="size-4" /><span>Settings</span></SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroup>
                    </SidebarContent>
                  </Sidebar>
                </SidebarProvider>
              </div>
            </Section>

            <Section id="skeleton" title="Skeleton">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </Section>

            <Section id="slider" title="Slider">
              <div className="max-w-sm space-y-6">
                <Slider defaultValue={[50]} max={100} step={1} />
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </Section>

            <Section id="sonner" title="Sonner">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={() => toast('Event has been created')}>Default</Button>
                <Button variant="outline" onClick={() => toast.success('Successfully saved!')}>Success</Button>
                <Button variant="outline" onClick={() => toast.error('Something went wrong')}>Error</Button>
                <Button variant="outline" onClick={() => toast.info('New update available')}>Info</Button>
              </div>
              <Toaster />
            </Section>

            <Section id="spinner" title="Spinner">
              <div className="flex items-center gap-4">
                <Spinner />
                <span className="text-sm text-muted-foreground">Loading...</span>
              </div>
            </Section>

            <Section id="switch" title="Switch">
              <div className="flex items-center gap-3">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            </Section>

            <Section id="table" title="Table">
              <Table>
                <TableCaption>A list of recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV002</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV003</TableCell>
                    <TableCell>Unpaid</TableCell>
                    <TableCell>Wire Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Section>

            <Section id="tabs" title="Tabs">
              <div className="space-y-6">
                <Tabs defaultValue="account" className="w-full max-w-md">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="text-sm text-muted-foreground">
                    Manage your account settings and preferences.
                  </TabsContent>
                  <TabsContent value="password" className="text-sm text-muted-foreground">
                    Change your password here.
                  </TabsContent>
                  <TabsContent value="settings" className="text-sm text-muted-foreground">
                    Configure your application settings.
                  </TabsContent>
                </Tabs>
                <Tabs defaultValue="tab1" className="w-full max-w-md">
                  <TabsList variant="line">
                    <TabsTrigger value="tab1">Overview</TabsTrigger>
                    <TabsTrigger value="tab2">Analytics</TabsTrigger>
                    <TabsTrigger value="tab3">Reports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="text-sm text-muted-foreground">
                    Line variant tabs with Material 3 accent colors.
                  </TabsContent>
                  <TabsContent value="tab2" className="text-sm text-muted-foreground">
                    Analytics content here.
                  </TabsContent>
                  <TabsContent value="tab3" className="text-sm text-muted-foreground">
                    Reports content here.
                  </TabsContent>
                </Tabs>
              </div>
            </Section>

            <Section id="textarea" title="Textarea">
              <Textarea placeholder="Type your message here." className="max-w-sm" />
            </Section>

            <Section id="toggle" title="Toggle">
              <div className="flex gap-2">
                <Toggle aria-label="Toggle bold">
                  <span className="font-bold">B</span>
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <span className="italic">I</span>
                </Toggle>
                <Toggle variant="outline" aria-label="Toggle underline">
                  <span className="underline">U</span>
                </Toggle>
              </div>
            </Section>

            <Section id="toggle-group" title="Toggle Group">
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <span className="font-bold">B</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <span className="italic">I</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <span className="underline">U</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </Section>

            <Section id="tooltip" title="Tooltip">
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Section>

            <div className="h-16" />
          </main>
        </div>
      </div>
    </TooltipProvider>
  )
}
