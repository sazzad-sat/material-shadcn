import { createFileRoute } from '@tanstack/react-router'
import { readFileSync } from 'fs'
import { join } from 'path'

const THEME_SOURCE = readFileSync(
  join(import.meta.dirname, '../../../registry/theme.tsx'),
  'utf-8'
)

const registry = JSON.stringify({
  name: "theme",
  type: "registry:component",
  dependencies: ["material-shadcn"],
  files: [
    {
      path: "components/theme.tsx",
      type: "registry:component",
      content: THEME_SOURCE,
    },
  ],
})

export const Route = createFileRoute('/r/theme')({
  server: {
    handlers: {
      GET: async () => {
        return new Response(registry, {
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
