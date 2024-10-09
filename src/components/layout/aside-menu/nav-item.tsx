'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ElementType } from 'react'
import { tv } from 'tailwind-variants'

const link = tv({
  base: 'group flex items-center gap-3 rounded px-3 py-2 w-full justify-between',
  variants: {
    variant: {
      default: 'hover:bg-green-100 transition-colors',
      active: 'bg-green-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const icon = tv({
  base: 'h-5 w-5 group-hover/link:scale-110 transition-all group-hover/link:rotate-12',
  variants: {
    variant: {
      default:
        'text-zinc-500 group-hover/link:text-white',
      active:
        'font-bold text-green-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const text = tv({
  base: 'text-sm',
  variants: {
    variant: {
      default:
        'font-medium text-zinc-500 group-hover/link:text-white',
      active:
        'group/link:text-green-500 font-bold text-green-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface NavItemProps {
  title: string
  path: string
  icon: ElementType
  subLinks?: Array<{
    title: string
    path: string
  }>
  closeItems: () => void
}

export const NavItem = ({
  title,
  path,
  icon: Icon,
  subLinks,
  closeItems
}: NavItemProps) => {
  const pathname = usePathname()
  const formattedPath = path.split('/')
  const isActive = pathname.startsWith('/' + formattedPath[1])

  const variant = isActive ? 'active' : 'default'
  const subLinksByOrder = subLinks?.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className='w-full'>
      <Accordion.Trigger asChild>
        <button className={link({ variant })}>
          <div className="flex gap-2">
            <Icon className={icon({ variant })} />
            <span className={text({ variant })}>{title}</span>
          </div>

          <ChevronDownIcon className="h-4 w-4 text-zinc-400 transition-all group-data-[state=open]:rotate-180" />
        </button>
      </Accordion.Trigger>

      <Accordion.Content className='data-[state=open]:animate-sidePanelShow'>
        <ul className="mb-2 ml-5 mt-1 border-l border-neutral-200">
          {subLinksByOrder?.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={() => closeItems()}
                  className="group/item flex px-4 py-2 transition-all hover:bg-green-100"
                >
                  <span className="text-xs text-zinc-500 group-hover/item:text-green-500">
                    {link.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Accordion.Content>
    </div>
  )
}
