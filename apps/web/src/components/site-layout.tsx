import { Link, useMatches } from '@tanstack/react-router'
import { useTheme } from '../../registry/theme'

const NAV = [
  { label: 'Docs', to: '/docs' },
  { label: 'Components', to: '/components' },
  { label: 'Charts', to: '/charts' },
] as const

export function SiteHeader() {
  const { colorMode, cycleColorMode } = useTheme()
  const matches = useMatches()
  const currentPath = matches[matches.length - 1]?.fullPath ?? '/'

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-14">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none"><defs><linearGradient id="ug" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FBBC05"/><stop offset="100%" stopColor="#EA4335"/></linearGradient><linearGradient id="lwg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#4285F4"/><stop offset="100%" stopColor="#34A853"/></linearGradient></defs><path d="M192 40L40 192" stroke="url(#ug)" strokeWidth="32" strokeLinecap="round"/><path d="M208 128L128 208" stroke="url(#lwg)" strokeWidth="32" strokeLinecap="round"/></svg>
            material-shadcn
          </Link>
          <nav className="hidden items-center gap-1 sm:flex">
            {NAV.map((item) => {
              const isActive = currentPath.startsWith(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  resetScroll
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/sazzad-sat/material-shadcn"
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
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <p>
        Built with{' '}
        <a href="https://ui.shadcn.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">shadcn/ui</a>
        {' '}and{' '}
        <a href="https://m3.material.io/styles/color" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Material 3</a>
      </p>
    </footer>
  )
}

