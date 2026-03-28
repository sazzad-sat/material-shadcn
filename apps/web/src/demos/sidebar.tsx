import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent,
  SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
} from '@/components/ui/sidebar'
import { HomeIcon, UsersIcon, SettingsIcon } from 'lucide-react'

export function SidebarDemo() {
  return (
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
  )
}
