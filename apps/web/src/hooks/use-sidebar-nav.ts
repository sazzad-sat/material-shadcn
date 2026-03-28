import { useState, useEffect, useCallback } from 'react'

interface Section {
  id: string
  label: string
}

export function useSidebarNav(sections: Section[]) {
  const [search, setSearch] = useState('')
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-10% 0px -80% 0px' }
    )
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [sections])

  const filteredSections = sections.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  )

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return { search, setSearch, activeId, filteredSections, scrollTo }
}
