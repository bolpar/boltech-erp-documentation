import * as Collapsible from '@radix-ui/react-collapsible'
import { MenuIcon } from 'lucide-react'
import { MenuContent } from './menu-content'

export const MobileMenu = () => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <button className='min-[710px]:hidden'><MenuIcon /></button>
      </Collapsible.Trigger>

      <Collapsible.Content className='absolute left-0 right-0 top-20 z-[9999] h-screen w-screen overflow-y-auto bg-neutral-50 px-[2%] pb-24 pt-4 min-[710px]:hidden'>
        <MenuContent />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}