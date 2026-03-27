import { createFileRoute } from '@tanstack/react-router'
import { generateRegistryTheme, Variant } from 'material-shadcn'

const VARIANT_MAP: Record<string, Variant> = {
  'tonal-spot': Variant.TONAL_SPOT,
  'expressive': Variant.EXPRESSIVE,
  'fidelity': Variant.FIDELITY,
  'vibrant': Variant.VIBRANT,
  'neutral': Variant.NEUTRAL,
  'monochrome': Variant.MONOCHROME,
  'content': Variant.CONTENT,
  'rainbow': Variant.RAINBOW,
  'fruit-salad': Variant.FRUIT_SALAD,
}

export const Route = createFileRoute('/r/$color')({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const hex = `#${params.color}`

        if (!/^#[0-9a-fA-F]{6}$/.test(hex)) {
          return new Response(JSON.stringify({ error: 'Invalid hex color. Use 6 hex digits, e.g. 6750A4' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          })
        }

        const url = new URL(request.url)
        const variantParam = url.searchParams.get('variant') ?? 'expressive'
        const variant = VARIANT_MAP[variantParam] ?? Variant.EXPRESSIVE

        const theme = generateRegistryTheme({ seed: hex, variant })

        return new Response(JSON.stringify(theme), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=31536000, immutable',
            'Access-Control-Allow-Origin': '*',
          },
        })
      },
    },
  },
})
