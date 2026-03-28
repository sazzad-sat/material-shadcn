import { createFileRoute } from '@tanstack/react-router'
import { useState, useCallback } from 'react'
import { generateTheme, Variant } from 'material-shadcn'
import { useTheme } from '../../../registry/theme'
import { InstallCommand } from '../../components/install-command'

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

const VARIANTS: Array<{ name: string; value: Variant; slug: string }> = [
  { name: 'Tonal Spot', value: Variant.TONAL_SPOT, slug: 'tonal-spot' },
  { name: 'Expressive', value: Variant.EXPRESSIVE, slug: 'expressive' },
  { name: 'Fidelity', value: Variant.FIDELITY, slug: 'fidelity' },
  { name: 'Vibrant', value: Variant.VIBRANT, slug: 'vibrant' },
  { name: 'Neutral', value: Variant.NEUTRAL, slug: 'neutral' },
  { name: 'Mono', value: Variant.MONOCHROME, slug: 'monochrome' },
  { name: 'Content', value: Variant.CONTENT, slug: 'content' },
  { name: 'Rainbow', value: Variant.RAINBOW, slug: 'rainbow' },
  { name: 'Fruit Salad', value: Variant.FRUIT_SALAD, slug: 'fruit-salad' },
]

export const Route = createFileRoute('/docs/static-theme')({
  head: () => ({
    meta: [
      { title: 'Static Theme — material-shadcn' },
      { name: 'description', content: 'Generate a CSS theme file with Material 3 colors. One CLI command, no runtime dependencies.' },
      { name: 'og:title', content: 'Static Theme — material-shadcn' },
      { name: 'og:description', content: 'Generate a CSS theme file with Material 3 colors. One CLI command, no runtime dependencies.' },
      { name: 'og:url', content: 'https://material-shadcn.vercel.app/docs/static-theme' },
    ],
  }),
  component: StaticTheme,
})

function StaticTheme() {
  const { resolvedDark } = useTheme()
  const [seed, setSeed] = useState('#6750A4')
  const [selectedVariant, setSelectedVariant] = useState(VARIANTS[0])

  const handleColorChange = useCallback((hex: string) => setSeed(hex), [])

  const variantSlug = selectedVariant.slug

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Static theme</h1>
      <p className="text-muted-foreground mb-10">
        Generates a CSS file with all shadcn variables set to Material 3 colors.
        One command — drop it in and you're done.
      </p>

      {/* Color picker */}
      <h2 className="text-sm font-semibold mb-3">Pick a seed color</h2>
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Variant selector */}
      <h2 className="text-sm font-semibold mb-3">Choose a variant</h2>
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-8">
        {VARIANTS.map((v) => {
          const variantTheme = generateTheme({ seed, variant: v.value })
          const t = resolvedDark ? variantTheme.dark : variantTheme.light
          const primaryColor = t.primary || 'oklch(0.5 0.2 280)'
          const secondaryColor = t.secondary || 'oklch(0.8 0.05 280)'
          const cardBg = t.background || 'oklch(0.98 0.01 280)'
          const borderColor = t.border || 'oklch(0.9 0.01 280)'
          const isSelected = selectedVariant.value === v.value
          return (
            <button
              key={v.value}
              onClick={() => setSelectedVariant(v)}
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

      {/* Install command */}
      <h2 className="text-sm font-semibold mb-3">Install</h2>
      <InstallCommand color={seed} variant={variantSlug} />

      <div className="mt-4 rounded-lg border border-border bg-muted/20 p-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">That's it. </span>
          The command adds a CSS theme file to your project. All shadcn components pick up the new colors automatically — no config changes needed.
        </p>
      </div>
    </div>
  )
}
