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

  console.log("Menu Link: ", pathName, href)
  console.log(pathName === href)

  return (
    <div className='group flex w-full items-center justify-between gap-3 rounded px-3 py-2 transition-colors hover:bg-green-100'>
      <Link href={href} className={`h-full w-full text-sm font-medium  ${pathName === href ? "text-green-500 dark:text-green-500" : "text-zinc-500 dark:text-white"} group-hover/link:text-white dark:group-hover/link:text-zinc-800`}>
        {title}
      </Link>
    </div>
  )
}