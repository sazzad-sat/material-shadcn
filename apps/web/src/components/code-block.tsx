import { useState, useEffect, useRef } from 'react'
import { codeToHtml } from 'shiki'
import { useTheme } from '../../registry/theme'

export function CodeBlock({
  children,
  lang = 'tsx',
}: {
  children: string
  lang?: string
}) {
  const [copied, setCopied] = useState(false)
  const [html, setHtml] = useState('')
  const { resolvedDark } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    codeToHtml(children, {
      lang,
      theme: resolvedDark ? 'github-dark-default' : 'github-light-default',
    }).then((result) => {
      if (!cancelled) setHtml(result)
    })
    return () => {
      cancelled = true
    }
  }, [children, lang, resolvedDark])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {html ? (
        <div
          ref={containerRef}
          className="rounded-lg border border-border overflow-x-auto [&_pre]:px-4 [&_pre]:py-3 [&_pre]:text-sm [&_pre]:!bg-muted/30 [&_code]:text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm overflow-x-auto">
          <code className="text-foreground">{children}</code>
        </pre>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground bg-background/80 backdrop-blur-sm border border-border rounded-md px-2 py-1"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}
