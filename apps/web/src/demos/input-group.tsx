import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { SearchIcon, MailIcon } from 'lucide-react'

export function InputGroupDemo() {
  return (
    <div className="space-y-4 max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <MailIcon className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Email address" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
