import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Theme } from '../../registry/theme'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'material-shadcn — Material 3 colors for shadcn/ui' },
      { name: 'description', content: 'Use Google Material 3 color system with shadcn/ui. Pick a seed color, get a theme.' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico', type: 'image/png' },
      { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:ROND,wght@0..100,100..900&display=swap' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Theme>
          <Outlet />
        </Theme>
        <Scripts />
      </body>
    </html>
  )
}
