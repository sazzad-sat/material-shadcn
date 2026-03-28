import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
  DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
