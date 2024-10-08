import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Link from "next/link"

interface FooterPaginationProps {
  pagination: {
    previous?: {
      title: string
      url: string
    },
    next?: {
      title: string
      url: string
    }
  }
}

export const FooterPagination = ({ pagination }: FooterPaginationProps) => {
  return (
    <footer className="mt-8 flex items-center justify-between border-t pt-8">
      <PreviousPage title={pagination?.previous?.title} url={pagination.previous?.url} />
      <NextPage title={pagination.next?.title} url={pagination.next?.url} />
    </footer>
  )
}

interface PreviousPageProps {
  title?: string
  url?: string
}

const PreviousPage = ({ title, url }: PreviousPageProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-end">
        <ChevronLeftIcon className="mt-0.5 h-4 w-4 text-neutral-400" />
        <span className="text-neutral-500">Anterior</span>
      </div>

      <Link href={url ?? "/"} className="text-green-500 hover:text-green-700">{title}</Link>
    </div>
  )
}

interface NextPageProps {
  title?: string
  url?: string
}

const NextPage = ({ title, url }: NextPageProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span className="text-neutral-500">Próximo</span>
        <ChevronRightIcon className="mt-0.5 h-4 w-4 text-neutral-400" />
      </div>

      <Link href={url ?? "/"} className="text-green-500 hover:text-green-700">{title}</Link>
    </div>
  )
}