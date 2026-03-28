import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { generateTheme, Variant } from 'material-shadcn'
import { useTheme } from '../../../registry/theme'

export const Route = createFileRoute('/docs/')({
  component: DocsOverview,
})

const DYNAMIC_SEEDS = ['#6750A4', '#1B6EF3', '#006B5E', '#BA1A1A', '#8B5000']

function StaticPathCard() {
  const { resolvedDark } = useTheme()
  const theme = generateTheme({ seed: '#6750A4', variant: Variant.TONAL_SPOT })
  const t = resolvedDark ? theme.dark : theme.light

  return (
    <Link
      to="/docs/static-theme"
      className="group flex flex-col rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-colors"
    >
      {/* Visual: static color grid */}
      <div className="p-5 pb-4">
        <div className="grid grid-cols-6 gap-1 mb-3">
          {[t.primary, t.secondary, t.accent, t.muted, t.destructive, t.border].map(
            (color, i) => (
              <div
                key={i}
                className="aspect-square rounded-md"
                style={{ backgroundColor: color }}
              />
            )
          )}
        </div>
        <div className="flex gap-1">
          {[t['chart-1'], t['chart-2'], t['chart-3'], t['chart-4'], t['chart-5']].map(
            (color, i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full"
                style={{ backgroundColor: color }}
              />
            )
          )}
        </div>
      </div>

      {/* Mock terminal */}
      <div className="mx-5 mb-5 rounded-lg bg-muted/40 border border-border/50 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/50">
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
        <div className="px-3 py-2.5">
          <code className="text-[10px] text-muted-foreground font-mono">
            <span className="text-primary">npx</span> shadcn add .../r/6750A4
          </code>
        </div>
      </div>

      <div className="px-5 pb-5 mt-auto">
        <h2 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
          Static theme
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          One command generates a CSS file with your palette baked in. Nothing runs at runtime — just colors, locked in.
        </p>
      </div>
    </Link>
  )
}

function DynamicPathCard() {
  const { resolvedDark } = useTheme()
  const [seedIndex, setSeedIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeedIndex((i) => (i + 1) % DYNAMIC_SEEDS.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const currentSeed = DYNAMIC_SEEDS[seedIndex]

  return (
    <Link
      to="/docs/dynamic-theme"
      className="group block rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-colors"
    >
      {/* Visual: shifting color grid */}
      <div className="p-5 pb-4 overflow-hidden">
        <div className="grid grid-cols-5 gap-2">
          {DYNAMIC_SEEDS.map((seed, i) => {
            const st = generateTheme({ seed, variant: Variant.TONAL_SPOT })
            const tokens = resolvedDark ? st.dark : st.light
            const isActive = i === seedIndex
            return (
              <div key={seed} className="flex flex-col items-center gap-1 min-w-0">
                <div
                  className="aspect-square w-full max-w-16 rounded-md transition-all duration-700"
                  style={{
                    backgroundColor: tokens.primary,
                    opacity: isActive ? 1 : 0.3,
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  }}
                />
                <div
                  className="h-1 w-full max-w-16 rounded-full transition-all duration-700"
                  style={{
                    backgroundColor: tokens.secondary,
                    opacity: isActive ? 1 : 0.2,
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Mock component tree */}
      <div className="mx-5 mb-5 rounded-lg bg-muted/40 border border-border/50 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/50">
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
        <div className="px-3 py-2.5 space-y-1">
          <code className="block text-[10px] font-mono text-muted-foreground">
            {'<'}<span className="text-primary">Theme</span>{' seed='}<span className="text-muted-foreground/80">{'{'}</span><span className="transition-colors duration-700" style={{ color: currentSeed }}>{currentSeed}</span><span className="text-muted-foreground/80">{'}'}</span>{'>'}
          </code>
          <code className="block text-[10px] font-mono text-muted-foreground pl-3">
            {'<'}<span className="text-primary">App</span>{' />'}
          </code>
          <code className="block text-[10px] font-mono text-muted-foreground">
            {'</'}<span className="text-primary">Theme</span>{'>'}
          </code>
        </div>
      </div>

      <div className="px-5 pb-5">
        <h2 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
          Dynamic theme
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A React provider that generates palettes at runtime. Users pick colors, sections get their own themes.
        </p>
      </div>
    </Link>
  )
}

function DocsOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Documentation</h1>
      <p className="text-muted-foreground mb-10 max-w-lg">
        Two separate paths — pick the one that fits. You don't need both.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 mb-12">
        <StaticPathCard />
        <DynamicPathCard />
      </div>

      <Link
        to="/docs/reference"
        className="group flex items-center justify-between rounded-xl border border-border px-5 py-4 hover:border-primary/40 transition-colors"
      >
        <div>
          <h2 className="font-semibold mb-0.5 group-hover:text-primary transition-colors">Reference</h2>
          <p className="text-sm text-muted-foreground">
            Props, hooks, and Variant enum — for the dynamic theme path.
          </p>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </Link>
    </div>
  )
}
