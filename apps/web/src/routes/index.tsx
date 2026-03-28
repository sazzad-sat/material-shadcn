import { createFileRoute, Link } from '@tanstack/react-router'
import { useCallback } from 'react'
import { generateTheme, Variant } from 'material-shadcn'
import { Theme, useTheme } from '../../registry/theme'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Switch } from '../components/ui/switch'
import { Separator } from '../components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

const DEFAULT_SEED = '#6750A4'

const PRESET_COLORS = [
  { name: 'Purple', hex: '#6750A4' },
  { name: 'Blue', hex: '#1B6EF3' },
  { name: 'Teal', hex: '#006B5E' },
  { name: 'Green', hex: '#386A20' },
  { name: 'Red', hex: '#BA1A1A' },
  { name: 'Orange', hex: '#8B5000' },
  { name: 'Pink', hex: '#984061' },
  { name: 'Indigo', hex: '#3F51B5' },
  { name: 'Black', hex: '#000000' },
]

const VARIANTS: Array<{ name: string; value: Variant; description: string }> = [
  { name: 'Tonal Spot', value: Variant.TONAL_SPOT, description: 'Balanced' },
  { name: 'Expressive', value: Variant.EXPRESSIVE, description: 'Vibrant' },
  { name: 'Fidelity', value: Variant.FIDELITY, description: 'True to seed' },
  { name: 'Vibrant', value: Variant.VIBRANT, description: 'Bold' },
  { name: 'Neutral', value: Variant.NEUTRAL, description: 'Subtle' },
  { name: 'Mono', value: Variant.MONOCHROME, description: 'Grayscale' },
  { name: 'Content', value: Variant.CONTENT, description: 'Adaptive' },
  { name: 'Rainbow', value: Variant.RAINBOW, description: 'Colorful' },
  { name: 'Fruit Salad', value: Variant.FRUIT_SALAD, description: 'Playful' },
]

function ContentCard({
  src,
  name,
  desc,
  seedColor,
  objectPos,
  onApply,
}: {
  src: string
  name: string
  desc: string
  seedColor: string
  objectPos?: string
  onApply: (hex: string) => void
}) {
  return (
    <Theme seed={seedColor} variant={Variant.CONTENT} className="rounded-xl overflow-hidden group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={objectPos ? { objectPosition: objectPos } : undefined}
        />
      </div>
      <div className="p-4 bg-card text-card-foreground rounded-b-xl space-y-3">
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
        </div>
        <Button
          size="sm"
          className="w-full"
          onClick={() => onApply(seedColor)}
        >
          Apply theme
        </Button>
      </div>
    </Theme>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const {
    seed, variant, colorMode, resolvedDark, theme,
    setSeed, setVariant, setColorMode, cycleColorMode,
  } = useTheme()

  const handleColorChange = useCallback(
    (hex: string) => setSeed(hex),
    [setSeed]
  )

  const handleVariantChange = useCallback(
    (v: Variant) => setVariant(v),
    [setVariant]
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-14">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="none"><defs><linearGradient id="ug" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FBBC05"/><stop offset="100%" stopColor="#EA4335"/></linearGradient><linearGradient id="lwg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#4285F4"/><stop offset="100%" stopColor="#34A853"/></linearGradient></defs><path d="M192 40L40 192" stroke="url(#ug)" strokeWidth="32" strokeLinecap="round"/><path d="M208 128L128 208" stroke="url(#lwg)" strokeWidth="32" strokeLinecap="round"/></svg>
              material-shadcn
            </Link>
            <nav className="hidden items-center gap-1 sm:flex">
              <Link to="/docs" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Docs</Link>
              <Link to="/components" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Components</Link>
              <Link to="/charts" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Charts</Link>
            </nav>
          </div>
          <div className="flex items-center gap-1">
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

      <main>
        {/* Hero */}
        <section className="px-6 pt-16 pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Material 3 colors
              <br />
              <span className="text-primary">for shadcn/ui</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Pick a seed color and variant. See the theme change.
              <br className="hidden sm:block" />
              Install with one command.
            </p>
          </div>

          {/* Controls */}
          <div className="mx-auto mt-10 max-w-xl">
            {/* Seed color */}
            <div className="flex flex-wrap justify-center gap-2">
              {PRESET_COLORS.map((preset) => {
                const isSelected = seed.toUpperCase() === preset.hex.toUpperCase()
                return (
                  <button
                    key={preset.hex}
                    onClick={() => handleColorChange(preset.hex)}
                    title={preset.name}
                    className="h-8 w-8 rounded-full transition-all hover:scale-110"
                    style={{
                      backgroundColor: preset.hex,
                      boxShadow: isSelected
                        ? `0 0 0 2px var(--background), 0 0 0 4px ${preset.hex}`
                        : 'none',
                      transform: isSelected ? 'scale(1.1)' : undefined,
                    }}
                  />
                )
              })}
              <label
                title="Custom color"
                className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-border text-muted-foreground transition-all hover:scale-110 hover:border-foreground hover:text-foreground"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="7" y1="2" x2="7" y2="12" />
                  <line x1="2" y1="7" x2="12" y2="7" />
                </svg>
                <input
                  type="color"
                  value={seed}
                  onChange={(e) => handleColorChange(e.target.value.toUpperCase())}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
              </label>
            </div>
          </div>

          {/* Variant selector — visual cards */}
          <div className="mt-5 -mx-6 overflow-x-auto py-3 px-6">
            <div className="flex gap-1.5 w-fit mx-auto">
              {VARIANTS.map((v) => {
                const variantTheme = generateTheme({ seed, variant: v.value })
                const t = resolvedDark ? variantTheme.dark : variantTheme.light
                const primaryColor = t.primary || 'oklch(0.5 0.2 280)'
                const secondaryColor = t.secondary || 'oklch(0.8 0.05 280)'
                const cardBg = t.background || 'oklch(0.98 0.01 280)'
                const borderColor = t.border || 'oklch(0.9 0.01 280)'
                const isSelected = variant === v.value
                return (
                  <button
                    key={v.value}
                    onClick={() => handleVariantChange(v.value)}
                    className={`group w-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      isSelected ? 'scale-[1.02]' : 'hover:scale-[1.03]'
                    }`}
                    style={{ borderColor: isSelected ? primaryColor : borderColor }}
                  >
                    <div
                      className="aspect-[3/4] flex flex-col gap-1 p-2 justify-end"
                      style={{ backgroundColor: cardBg }}
                    >
                      <div className="flex gap-0.5">
                        <div className="h-1.5 flex-1 rounded-sm" style={{ backgroundColor: primaryColor }} />
                        <div className="h-1.5 flex-1 rounded-sm" style={{ backgroundColor: secondaryColor }} />
                      </div>
                      <div className="h-1.5 w-3/4 rounded-sm" style={{ backgroundColor: primaryColor, opacity: 0.4 }} />
                    </div>
                    <div className="bg-background py-1 px-0.5 text-center">
                      <p className="text-[9px] font-medium text-muted-foreground truncate">{v.name}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto mt-10 max-w-xl flex justify-center">
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Read docs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          </div>
        </section>

        {/* Narrative: How it works */}
        <section className="px-6 pt-20 pb-16">
          <div className="mx-auto max-w-6xl">

            {/* Step 1 — Color tokens */}
            <div className="mb-24">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-3">
                One color in, entire palette out
              </h2>
              <p className="text-muted-foreground max-w-lg mb-10">
                Each shadcn token maps to a Material 3 color role.
                They all derive from your single seed color.
              </p>

              <div className="grid grid-cols-4 gap-1 sm:grid-cols-8 sm:gap-1.5">
                {[
                  ['Primary', 'bg-primary', 'text-primary-foreground'],
                  ['Secondary', 'bg-secondary', 'text-secondary-foreground'],
                  ['Accent', 'bg-accent', 'text-accent-foreground'],
                  ['Muted', 'bg-muted', 'text-muted-foreground'],
                  ['Destructive', 'bg-destructive', 'text-destructive-foreground'],
                  ['Card', 'bg-card', 'text-card-foreground'],
                  ['Background', 'bg-background', 'text-foreground border border-border'],
                  ['Border', 'bg-border', 'text-foreground'],
                ].map(([name, bg, text]) => (
                  <div key={name} className="group">
                    <div className={`${bg} ${text} aspect-[3/4] rounded-lg flex items-end p-2.5 transition-transform hover:scale-[1.03]`}>
                      <span className="text-[10px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">{name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-5 gap-1 sm:gap-1.5">
                {['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'].map((name, i) => (
                  <div key={name} className="group">
                    <div
                      className="h-8 rounded-md transition-transform hover:scale-[1.03]"
                      style={{ backgroundColor: `var(--${name})` }}
                    />
                    <p className="mt-1 text-[10px] text-muted-foreground text-center">Chart {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 — Content-driven theme */}
            <div className="mb-24">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-3">
                Scoped themes, anywhere
              </h2>
              <p className="text-muted-foreground max-w-lg mb-10">
                Generate a theme from any image and scope it to a card, section, or
                entire page. Each area gets its own palette — buttons, text, and
                borders all adapt independently.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { src: '/images/tiger.jpg', name: 'Bengal Tiger', desc: 'Warm amber tones', seedColor: '#C87A2A', objectPos: 'center 30%' },
                  { src: '/images/kingfisher.jpg', name: 'Kingfisher', desc: 'Vivid blue plumage', seedColor: '#0097A7', objectPos: 'center' },
                  { src: '/images/parakeet.jpg', name: 'Parakeet', desc: 'Bright green feathers', seedColor: '#4CAF50', objectPos: 'center top' },
                ].map((animal) => (
                  <ContentCard
                    key={animal.name}
                    src={animal.src}
                    name={animal.name}
                    desc={animal.desc}
                    seedColor={animal.seedColor}
                    objectPos={animal.objectPos}
                    onApply={(hex) => { setSeed(hex) }}
                  />
                ))}
              </div>
            </div>

            {/* Step 3 — Components stay stock */}
            <div className="mb-24">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-3">
                Your components, new colors
              </h2>
              <p className="text-muted-foreground max-w-lg mb-10">
                Nothing is forked or patched. shadcn's CSS variables get mapped to
                Material 3 roles — buttons, badges, inputs all pick up the theme automatically.
              </p>

              <div className="grid gap-px bg-border/40 rounded-xl overflow-hidden sm:grid-cols-3">
                <div className="bg-background p-6 space-y-3">
                  <p className="text-xs font-medium text-muted-foreground mb-4">Buttons</p>
                  <div className="flex flex-wrap gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>

                <div className="bg-background p-6">
                  <p className="text-xs font-medium text-muted-foreground mb-4">Badges & Inputs</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-email" className="text-xs">Email</Label>
                    <Input id="demo-email" type="email" placeholder="hello@example.com" />
                  </div>
                </div>

                <div className="bg-background p-6">
                  <p className="text-xs font-medium text-muted-foreground mb-4">Controls</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="demo-switch" className="text-sm">Notifications</Label>
                      <Switch id="demo-switch" />
                    </div>
                    <Separator />
                    <Tabs defaultValue="overview">
                      <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="mt-2 text-xs text-muted-foreground">
                        All colors shift with your seed — primary, secondary, accent, and destructive.
                      </TabsContent>
                      <TabsContent value="details" className="mt-2 text-xs text-muted-foreground">
                        Each role maps to an M3 DynamicScheme property. No manual tuning needed.
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-3">
                Ready to use
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Static CSS themes or runtime React bindings — pick what fits your project.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  to="/docs"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Read docs
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
                <Link
                  to="/components"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  Browse components
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>
          Built with{' '}
          <a href="https://ui.shadcn.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">shadcn/ui</a>
          {' '}and{' '}
          <a href="https://m3.material.io/styles/color" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Material 3</a>
        </p>
      </footer>
    </div>
  )
}
