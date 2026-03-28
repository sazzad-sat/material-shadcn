import { useState, useEffect } from 'react'
import {
  Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator,
} from '@/components/ui/command'

export function CommandDemo() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // cmdk calls scrollIntoView on its selected item during init, which scrolls the whole page.
    // Defer rendering and restore scroll position after cmdk's scrollIntoView fires.
    const scrollY = window.scrollY
    setMounted(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY)
      })
    })
  }, [])

  if (!mounted) return <div className="max-w-sm h-[220px] rounded-lg border" />
  return (
    <Command className="max-w-sm rounded-lg border">
      <CommandInput placeholder="Type a command..." autoFocus={false} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
