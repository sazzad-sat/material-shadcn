# material-shadcn

Material Design 3 color system for [shadcn/ui](https://ui.shadcn.com). Generate complete color palettes from a single seed color.

## Install

```bash
npm install material-shadcn
```

## Usage

### Static theme (CSS generation)

One command generates all shadcn CSS variables from a seed color:

```bash
npx shadcn@latest add https://material-shadcn.vercel.app/r/6750A4
```

Replace `6750A4` with any hex color. Append `?variant=vibrant` to change the variant.

### Dynamic theme (React provider)

```bash
npx shadcn@latest add https://material-shadcn.vercel.app/r/theme
```

This installs a `<Theme>` component and `useTheme` hook:

```tsx
import { Theme } from "@/components/theme"

<Theme seed="#6750A4">
  <App />
</Theme>
```

```tsx
import { useTheme } from "@/components/theme"

function ThemePicker() {
  const { seed, setSeed, cycleColorMode } = useTheme()

  return (
    <input
      type="color"
      value={seed}
      onChange={(e) => setSeed(e.target.value)}
    />
  )
}
```

### Core API

```ts
import { generateTheme, Variant } from "material-shadcn"

const theme = generateTheme({
  seed: "#6750A4",
  variant: Variant.TONAL_SPOT,
})

// theme.light and theme.dark contain all shadcn tokens in oklch format
console.log(theme.light.primary) // "oklch(0.491 0.092 295.5)"
```

#### `generateTheme(options)`

| Option | Type | Default |
|--------|------|---------|
| `seed` | `string` | required |
| `variant` | `Variant` | `TONAL_SPOT` |
| `contrast` | `number` | `0` |

Returns `{ light: ThemeTokens, dark: ThemeTokens }`.

#### Variants

`TONAL_SPOT` `EXPRESSIVE` `FIDELITY` `VIBRANT` `NEUTRAL` `MONOCHROME` `CONTENT` `RAINBOW` `FRUIT_SALAD`

#### DOM utilities

```ts
import { applyTheme, removeTheme, tokensToCssVars, resolveColorMode } from "material-shadcn"

// Apply theme to an element
applyTheme(document.documentElement, theme, false)

// Get CSS variable map for inline styles
const vars = tokensToCssVars(theme.light)
// { "--primary": "oklch(...)", "--secondary": "oklch(...)", ... }

// Resolve color mode
const isDark = resolveColorMode("system") // true | false
```

## Tokens generated

All standard shadcn/ui tokens plus chart colors:

`background` `foreground` `primary` `primary-foreground` `secondary` `secondary-foreground` `accent` `accent-foreground` `muted` `muted-foreground` `destructive` `destructive-foreground` `card` `card-foreground` `popover` `popover-foreground` `border` `input` `ring` `sidebar-*` `chart-1` through `chart-5`

## License

MIT
