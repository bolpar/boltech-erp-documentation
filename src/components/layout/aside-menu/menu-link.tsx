'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"

interface MenuLinkProps extends ComponentProps<"a"> {
  title: string
  href: string
}

export const MenuLink = ({ title, href }: MenuLinkProps) => {
  const pathName = usePathname()

  return (
    <div className='group flex w-full items-center justify-between gap-3 rounded px-3 py-2 transition-colors hover:bg-green-100'>
      <Link href={href} className={`h-full w-full text-sm font-medium  ${pathName === href ? "text-green-500" : "text-zinc-500"} group-hover/link:text-white `}>
        {title}
      </Link>
    </div>
  )
}