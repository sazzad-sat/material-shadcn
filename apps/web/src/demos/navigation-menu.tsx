import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from '@/components/ui/navigation-menu'

export function NavigationMenuDemo() {
  return (
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
  )
}
