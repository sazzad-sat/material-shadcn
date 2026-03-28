# material-shadcn

[Material Design 3](https://m3.material.io/styles/color) color system for [shadcn/ui](https://ui.shadcn.com). One seed color generates a complete, perceptually uniform palette for every shadcn token — light mode, dark mode, and chart colors included.

**[Docs](https://material-shadcn.vercel.app)** &middot; **[npm](https://www.npmjs.com/package/material-shadcn)**

## Two paths

### Static — CSS at build time

```bash
npx shadcn@latest add https://material-shadcn.vercel.app/r/6750A4
```

Generates a CSS file with all shadcn variables baked in. Replace `6750A4` with any hex color. Nothing runs at runtime.

### Dynamic — React provider at runtime

```bash
npx shadcn@latest add https://material-shadcn.vercel.app/r/theme
```

Installs a `<Theme>` component that generates palettes on the fly. Users pick colors, sections get scoped themes, dark mode just works.

```tsx
import { Theme } from "@/components/theme"

<Theme seed="#6750A4">
  <App />
</Theme>
```

## What you get

Every shadcn/ui token, derived from a single seed color using Material 3 algorithms, output in OKLCH:

- `primary` `secondary` `accent` `muted` `destructive` + foregrounds
- `card` `popover` `sidebar-*` variants
- `border` `input` `ring`
- `chart-1` through `chart-5`

All in both light and dark modes.

## Core API

```bash
npm install material-shadcn
```

```ts
import { generateTheme, Variant } from "material-shadcn"

const theme = generateTheme({
  seed: "#6750A4",
  variant: Variant.TONAL_SPOT,
})

theme.light.primary // "oklch(0.491 0.092 295.5)"
```

9 variants: `TONAL_SPOT` `EXPRESSIVE` `FIDELITY` `VIBRANT` `NEUTRAL` `MONOCHROME` `CONTENT` `RAINBOW` `FRUIT_SALAD`

## Development

```bash
bun install
bun run dev        # starts web app on :3000
bun run build      # builds all packages
```

### Project structure

```
packages/core/     — theme generation, DOM utilities (npm: material-shadcn)
apps/web/          — docs site, component demos, registry endpoints
```

### Tests

```bash
cd packages/core
bun run test
```

## License

MIT
