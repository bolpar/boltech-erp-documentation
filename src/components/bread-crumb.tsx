import { ChevronRightIcon } from "lucide-react"

interface BreadCrumbProps {
  items: Array<{
    title: string
  }>
}

export const BreadCrumb = ({ items }: BreadCrumbProps) => {
  return (
    <div className="mb-4 flex items-center gap-1">
      <span className="text-sm text-neutral-500">Docs</span>
      {items.map((item, index) => {
        return (
          <div key={index} className="flex items-center">
            <ChevronRightIcon className="mt-0.5 h-4 w-4 text-neutral-500" />
            <span className="text-sm font-semibold text-neutral-600">{item.title}</span>
          </div>
        )
      })}
    </div>
  )
}