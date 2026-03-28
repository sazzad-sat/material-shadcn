import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/reference')({
  head: () => ({
    meta: [
      { title: 'API Reference — material-shadcn' },
      { name: 'description', content: 'Props, hooks, and Variant enum reference for the material-shadcn Theme component.' },
      { property: 'og:title', content: 'API Reference — material-shadcn' },
      { property: 'og:description', content: 'Props, hooks, and Variant enum reference for the material-shadcn Theme component.' },
      { property: 'og:url', content: 'https://material-shadcn.vercel.app/docs/reference' },
    ],
  }),
  component: Reference,
})

function Reference() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Reference</h1>
      <p className="text-muted-foreground mb-12">
        Props and hook API for the Theme component.
      </p>

      {/* useTheme */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">useTheme()</h2>
        <p className="text-muted-foreground mb-6">
          Returns the current theme state and setters. Must be used within a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Theme&gt;</code> provider.
        </p>

        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-2 font-medium">Property</th>
                <th className="text-left px-4 py-2 font-medium">Type</th>
                <th className="text-left px-4 py-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-2 font-mono text-xs">seed</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">string</code></td><td className="px-4 py-2 text-muted-foreground">Current seed color (hex)</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">variant</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">Variant</code></td><td className="px-4 py-2 text-muted-foreground">Current variant enum</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">colorMode</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">'system' | 'light' | 'dark'</code></td><td className="px-4 py-2 text-muted-foreground">Current color mode setting</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">resolvedDark</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">boolean</code></td><td className="px-4 py-2 text-muted-foreground">Whether dark mode is active</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">theme</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">GeneratedTheme</code></td><td className="px-4 py-2 text-muted-foreground">Generated theme with light/dark tokens</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">setSeed</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">(s: string | HTMLImageElement) =&gt; void</code></td><td className="px-4 py-2 text-muted-foreground">Change seed color or extract from image</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">setVariant</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">(v: Variant) =&gt; void</code></td><td className="px-4 py-2 text-muted-foreground">Change variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">setColorMode</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">(m: ColorMode) =&gt; void</code></td><td className="px-4 py-2 text-muted-foreground">Set color mode directly</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">cycleColorMode</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">() =&gt; void</code></td><td className="px-4 py-2 text-muted-foreground">Cycle system → light → dark</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Root Theme props */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">Root &lt;Theme&gt; props</h2>
        <p className="text-muted-foreground mb-6">
          Used when <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Theme&gt;</code> is
          the outermost provider (no parent Theme in the tree).
        </p>

        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-2 font-medium">Prop</th>
                <th className="text-left px-4 py-2 font-medium">Type</th>
                <th className="text-left px-4 py-2 font-medium">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-2 font-mono text-xs">seed</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">string | HTMLImageElement</code></td><td className="px-4 py-2 text-muted-foreground">#6750A4</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">variant</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">Variant</code></td><td className="px-4 py-2 text-muted-foreground">TONAL_SPOT</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">contrast</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">number</code></td><td className="px-4 py-2 text-muted-foreground">0</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">colorMode</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">'system' | 'light' | 'dark'</code></td><td className="px-4 py-2 text-muted-foreground">system</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">storageKey</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">string | null</code></td><td className="px-4 py-2 text-muted-foreground">material-shadcn-theme</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Nested Theme props */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">Nested &lt;Theme&gt; props</h2>
        <p className="text-muted-foreground mb-6">
          When <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Theme&gt;</code> is
          rendered inside another Theme, it creates a scoped <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;div&gt;</code> with
          its own CSS variables.
        </p>

        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-2 font-medium">Prop</th>
                <th className="text-left px-4 py-2 font-medium">Type</th>
                <th className="text-left px-4 py-2 font-medium">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-2 font-mono text-xs">seed</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">string | HTMLImageElement</code></td><td className="px-4 py-2 text-muted-foreground">required</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">variant</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">Variant</code></td><td className="px-4 py-2 text-muted-foreground">inherits parent</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">contrast</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">number</code></td><td className="px-4 py-2 text-muted-foreground">0</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">dark</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">boolean</code></td><td className="px-4 py-2 text-muted-foreground">inherits parent</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">...divProps</td><td className="px-4 py-2 text-muted-foreground"><code className="text-xs">HTMLDivElement props</code></td><td className="px-4 py-2 text-muted-foreground">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Variant enum */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">Variant enum</h2>
        <p className="text-muted-foreground mb-6">
          Imported from <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">material-shadcn</code>.
          Controls how Material 3 derives the palette from the seed color.
        </p>

        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-2 font-medium">Value</th>
                <th className="text-left px-4 py-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-2 font-mono text-xs">TONAL_SPOT</td><td className="px-4 py-2 text-muted-foreground">Balanced, default Material 3 style</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">EXPRESSIVE</td><td className="px-4 py-2 text-muted-foreground">Vibrant, high-chroma palette</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">FIDELITY</td><td className="px-4 py-2 text-muted-foreground">Stays true to the seed color</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">VIBRANT</td><td className="px-4 py-2 text-muted-foreground">Bold, saturated tones</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">NEUTRAL</td><td className="px-4 py-2 text-muted-foreground">Subtle, desaturated palette</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">MONOCHROME</td><td className="px-4 py-2 text-muted-foreground">Grayscale only</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">CONTENT</td><td className="px-4 py-2 text-muted-foreground">Adaptive to content colors</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">RAINBOW</td><td className="px-4 py-2 text-muted-foreground">Colorful, multi-hue spread</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">FRUIT_SALAD</td><td className="px-4 py-2 text-muted-foreground">Playful, varied hues</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
