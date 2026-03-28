import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

export function NativeSelectDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <NativeSelect>
        <NativeSelectOption value="">Select a fruit...</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
      </NativeSelect>
      <NativeSelect size="sm">
        <NativeSelectOption value="">Small select...</NativeSelectOption>
        <NativeSelectOption value="a">Option A</NativeSelectOption>
        <NativeSelectOption value="b">Option B</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
