import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar><AvatarFallback>CN</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
    </div>
  )
}
