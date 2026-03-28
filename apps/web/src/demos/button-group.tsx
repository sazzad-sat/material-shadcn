import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'

export function ButtonGroupDemo() {
  return (
    <div className="space-y-4">
      <ButtonGroup>
        <Button variant="outline">Left</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">Center</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">Right</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <ButtonGroupSeparator orientation="horizontal" />
        <Button variant="outline">Middle</Button>
        <ButtonGroupSeparator orientation="horizontal" />
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </div>
  )
}
