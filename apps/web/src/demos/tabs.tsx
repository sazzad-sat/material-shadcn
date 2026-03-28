import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function TabsDemo() {
  return (
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
  )
}
