import { Item, ItemGroup, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from '@/components/ui/item'
import { Button } from '@/components/ui/button'
import { FileIcon, StarIcon } from 'lucide-react'

export function ItemDemo() {
  return (
    <ItemGroup className="max-w-md divide-y rounded-lg border">
      <Item>
        <ItemMedia variant="icon"><FileIcon /></ItemMedia>
        <ItemContent>
          <ItemTitle>Project Proposal</ItemTitle>
          <ItemDescription>Last edited 2 hours ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon"><StarIcon className="size-4" /></Button>
        </ItemActions>
      </Item>
      <Item>
        <ItemMedia variant="icon"><FileIcon /></ItemMedia>
        <ItemContent>
          <ItemTitle>Meeting Notes</ItemTitle>
          <ItemDescription>Last edited yesterday</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon"><StarIcon className="size-4" /></Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}
