import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useCallback } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SECTIONS } from '@/demos'

export const Route = createFileRoute('/components')({
  component: Components,
})

function Components() {
  const [search, setSearch] = useState('')
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
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
      <div className="mx-auto max-w-6xl flex px-6">
          <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-48 shrink-0 pt-8 pb-8 pr-8 lg:block overflow-y-auto">
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
                  className={`rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                    activeId === s.id
                      ? 'font-medium text-foreground bg-muted/50'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="min-w-0 flex-1 py-12 lg:pl-4 space-y-8">
            <div className="mb-2">
              <h1 className="text-2xl font-bold tracking-tight">All Components</h1>
              <p className="text-sm text-muted-foreground">
                Every shadcn/ui component themed with Material 3 colors.
              </p>
            </div>

            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-20">
                <h2 className="mb-4 text-lg font-semibold tracking-tight">{s.label}</h2>
                <div className="rounded-xl border border-dashed border-border p-6">
                  <s.component />
                </div>
              </section>
            ))}
          </main>
      </div>
    </TooltipProvider>
  )
}
