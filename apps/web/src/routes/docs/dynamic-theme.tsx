import { createFileRoute, Link } from '@tanstack/react-router'
import { CodeBlock } from '../../components/code-block'

export const Route = createFileRoute('/docs/dynamic-theme')({
  head: () => ({
    meta: [
      { title: 'Dynamic Theme — material-shadcn' },
      { name: 'description', content: 'A React provider for runtime theming with user-selected colors, scoped palettes, and dark mode support.' },
      { property: 'og:title', content: 'Dynamic Theme — material-shadcn' },
      { property: 'og:description', content: 'A React provider for runtime theming with user-selected colors, scoped palettes, and dark mode support.' },
      { property: 'og:url', content: 'https://material-shadcn.vercel.app/docs/dynamic-theme' },
    ],
  }),
  component: DynamicTheme,
})

function DynamicTheme() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Dynamic theme</h1>
      <p className="text-muted-foreground mb-10">
        A React provider for dynamic theming — user-selected colors, scoped palettes per section, light/dark mode switching, and image-based color extraction.
      </p>

      {/* ---------------------------------------------------------------- */}
      {/* Install */}
      {/* ---------------------------------------------------------------- */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">Install</h2>

        <h3 className="text-sm font-semibold mb-3">1. Add the Theme component</h3>
        <CodeBlock>{`npx shadcn@latest add https://material-shadcn.vercel.app/r/theme`}</CodeBlock>
        <p className="text-sm text-muted-foreground mt-3 mb-8">
          Adds <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">components/theme.tsx</code> and
          installs <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">material-shadcn</code> automatically.
        </p>

        <h3 className="text-sm font-semibold mb-3">2. Wrap your app</h3>
        <CodeBlock>{`import { Theme } from "@/components/theme"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme seed="#6750A4">
          {children}
        </Theme>
      </body>
    </html>
  )
}`}</CodeBlock>
        <p className="text-sm text-muted-foreground mt-3 mb-8">
          The root <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Theme&gt;</code> applies
          CSS variables to <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;html&gt;</code>,
          manages light/dark mode, and persists user preferences to localStorage.
        </p>

        <h3 className="text-sm font-semibold mb-3">3. Control the theme</h3>
        <CodeBlock>{`import { useTheme } from "@/components/theme"

function ThemePicker() {
  const { seed, setSeed, cycleColorMode } = useTheme()

  return (
    <div>
      <input
        type="color"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
      />
      <button onClick={cycleColorMode}>
        Toggle dark mode
      </button>
    </div>
  )
}`}</CodeBlock>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Scoped themes */}
      {/* ---------------------------------------------------------------- */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">Scoped themes</h2>
        <p className="text-muted-foreground mb-6">
          Nest <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Theme&gt;</code> inside
          a parent <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Theme&gt;</code> to
          scope a different palette to any section. It renders a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;div&gt;</code> with
          CSS variables as inline styles — all child components pick them up via cascade.
        </p>

        <CodeBlock>{`import { Theme } from "@/components/theme"
import { Variant } from "material-shadcn"

function ProductCard({ imageColor }: { imageColor: string }) {
  return (
    <Theme seed={imageColor} variant={Variant.CONTENT}>
      <div className="bg-card text-card-foreground p-4 rounded-lg">
        <h3 className="text-primary">Product Title</h3>
        <button className="bg-primary text-primary-foreground">
          Buy now
        </button>
      </div>
    </Theme>
  )
}`}</CodeBlock>

        <p className="text-sm text-muted-foreground mt-4">
          You can pass <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">className</code>,{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">style</code>, and any other div props
          to the nested <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Theme&gt;</code>.
        </p>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Image-based seeding */}
      {/* ---------------------------------------------------------------- */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">Image-based seeding</h2>
        <p className="text-muted-foreground mb-6">
          Pass an <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">HTMLImageElement</code> to{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">setSeed()</code> or as the{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">seed</code> prop to extract a dominant color and generate a theme from it.
        </p>

        <CodeBlock>{`function ImageTheme() {
  const { setSeed } = useTheme()

  return (
    <img
      src="/hero.jpg"
      onLoad={(e) => setSeed(e.currentTarget)}
      alt="Hero"
    />
  )
}`}</CodeBlock>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Color mode */}
      {/* ---------------------------------------------------------------- */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">Color mode</h2>
        <p className="text-muted-foreground mb-6">
          The root <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Theme&gt;</code> manages
          light/dark mode with three states: <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">system</code>,{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">light</code>, and{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">dark</code>.
        </p>

        <CodeBlock>{`function ColorModeToggle() {
  const { colorMode, setColorMode, cycleColorMode } = useTheme()

  return (
    <div>
      {/* Cycle through system → light → dark */}
      <button onClick={cycleColorMode}>
        {colorMode}
      </button>

      {/* Or set directly */}
      <button onClick={() => setColorMode('dark')}>
        Dark mode
      </button>
    </div>
  )
}`}</CodeBlock>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Persistence */}
      {/* ---------------------------------------------------------------- */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">Persistence</h2>
        <p className="text-muted-foreground mb-6">
          By default, seed color, variant, and color mode are saved to localStorage under
          the key <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">material-shadcn-theme</code>.
          Pass <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">storageKey=&#123;null&#125;</code> to disable persistence.
        </p>

        <CodeBlock>{`{/* Custom storage key */}
<Theme storageKey="my-app-theme">
  {children}
</Theme>

{/* Disable persistence */}
<Theme storageKey={null}>
  {children}
</Theme>`}</CodeBlock>
      </section>

      <div className="rounded-lg border border-border bg-muted/20 p-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Next: </span>
          See <Link to="/docs/reference" className="text-primary hover:underline">Reference</Link> for
          all props and hook return values.
        </p>
      </div>
    </div>
  )
}
