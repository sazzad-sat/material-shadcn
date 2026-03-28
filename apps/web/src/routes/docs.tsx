import { createFileRoute, Link, Outlet, useMatches } from '@tanstack/react-router'

const NAV = [
  { label: 'Overview', to: '/docs' },
  { label: 'Static theme', to: '/docs/static-theme' },
  { label: 'Dynamic theme', to: '/docs/dynamic-theme' },
  { label: 'Reference', to: '/docs/reference' },
] as const

export const Route = createFileRoute('/docs')({
  component: DocsLayout,
})

function DocsLayout() {
  const matches = useMatches()
  const currentPath = matches[matches.length - 1]?.fullPath ?? '/docs'

  return (
    <div className="mx-auto max-w-6xl flex px-6">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-48 shrink-0 pt-8 pb-8 pr-8 lg:block overflow-y-auto">
          <nav className="flex flex-col gap-0.5">
            {NAV.map((item) => {
              const isActive = currentPath === item.to
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'font-medium text-foreground bg-muted/50'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 py-12 lg:pl-4">
          <Outlet />
        </main>
    </div>
  )
}
