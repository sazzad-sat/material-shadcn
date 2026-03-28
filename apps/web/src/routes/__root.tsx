import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Theme } from '../../registry/theme'
import { SiteHeader, SiteFooter } from '@/components/site-layout'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'material-shadcn — Material 3 colors for shadcn/ui' },
      { name: 'description', content: 'Use Google Material 3 color system with shadcn/ui. Pick a seed color, get a theme.' },
      { property: 'og:site_name', content: 'material-shadcn' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://material-shadcn.vercel.app/og.png' },
      { name: 'keywords', content: 'material 3, material you, shadcn/ui, shadcn, react, tailwind css, color system, theme generator, dark mode, design tokens, color palette' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://material-shadcn.vercel.app/og.png' },
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
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var s=JSON.parse(localStorage.getItem("material-shadcn-theme"));var m=s&&s.colorMode;if(m==="dark"||(m!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()` }} />
      </head>
      <body>
        <Theme>
          <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <Outlet />
            <SiteFooter />
          </div>
        </Theme>
        <Scripts />
      </body>
    </html>
  )
}
