import { SquareArrowOutUpRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "../menu/mobile-menu"

export const Header = () => {
  return (
    <header className="mb-8 flex h-16 w-full items-center justify-between border-b border-neutral-200/80 bg-white px-[4%]">
      <div className="flex items-center gap-2">
        <Link href="/introducao">
          <Image
            src="/boltech-logo.png"
            alt="Bolpar Logo"
            width={100}
            height={100}
            className="mt-2 hover:opacity-80"
          />
        </Link>
        <span className="rounded-full bg-neutral-200 px-2 py-1 text-xs text-neutral-700">v0.1</span>
      </div>

      <MobileMenu />

      <Link href="https://boltech-erp.vercel.app/vendas">
        <button className="mt-2 flex items-center gap-2 rounded-md bg-green-300 p-2 text-sm text-neutral-600 hover:bg-green-400 hover:text-neutral-800">
          <SquareArrowOutUpRightIcon className="h-4 w-4" /> Boltech ERP
        </button>
      </Link>
    </header>
  )
}