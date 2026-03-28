import { useState } from 'react'

interface InstallCommandProps {
  color: string
  variant?: string
}

const PACKAGE_MANAGERS = [
  { name: 'pnpm', prefix: 'pnpm dlx' },
  { name: 'npm', prefix: 'npx' },
  { name: 'yarn', prefix: 'npx' },
  { name: 'bun', prefix: 'bunx --bun' },
] as const

export function InstallCommand({ color, variant }: InstallCommandProps) {
  const [copied, setCopied] = useState(false)
  const [pm, setPm] = useState<(typeof PACKAGE_MANAGERS)[number]>(PACKAGE_MANAGERS[0])
  const hex = color.replace('#', '')
  const variantParam = variant ? `?variant=${variant}` : ''
  const command = `${pm.prefix} shadcn@latest add https://material-shadcn.vercel.app/r/${hex}${variantParam}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4">
        <div className="flex gap-0.5">
          {PACKAGE_MANAGERS.map((p) => (
            <button
              key={p.name}
              onClick={() => setPm(p)}
              className={`px-3 py-2 text-xs font-medium transition-colors ${
                pm.name === p.name
                  ? 'text-foreground border-b-2 border-foreground -mb-px'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 text-xs font-medium transition-colors px-2.5 py-1.5 rounded-md ${
            copied
              ? 'text-primary'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="bg-background px-4 py-3.5">
        <code className="block truncate font-mono text-sm text-muted-foreground">
          {command}
        </code>
      </div>
    </div>
  )
}
