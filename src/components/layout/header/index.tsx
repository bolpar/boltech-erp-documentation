import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { MobileMenu } from "../menu/mobile-menu"

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 flex h-20 w-screen items-center justify-between border-b border-neutral-200/80 bg-white px-[4%]">
      <div className="flex items-center gap-2">
        <Image
          src="/boltech-logo.png"
          alt="Bolpar Logo"
          width={100}
          height={100}
        />
        <span className="rounded-full bg-neutral-200 px-2 py-1 text-xs text-neutral-700">v0.1.1</span>
      </div>


      <MobileMenu />
      <div className="relative w-full max-w-72 max-[710px]:hidden">
        <input
          placeholder="Consultar na documentação..."
          className="w-full rounded-full border border-neutral-300 bg-neutral-100 py-2 pl-8 text-[0.8rem] placeholder:text-neutral-400/80"
        />
        <SearchIcon className="absolute left-2 top-2 h-5 w-5 text-neutral-300" />
      </div>
    </header>
  )
}