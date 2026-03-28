import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from '@/components/ui/combobox'

export function ComboboxDemo() {
  return (
    <Combobox>
      <ComboboxInput placeholder="Search a framework..." className="max-w-xs" />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxItem value="react" textValue="React">React</ComboboxItem>
          <ComboboxItem value="vue" textValue="Vue">Vue</ComboboxItem>
          <ComboboxItem value="svelte" textValue="Svelte">Svelte</ComboboxItem>
          <ComboboxItem value="angular" textValue="Angular">Angular</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
