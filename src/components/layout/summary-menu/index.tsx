'use client'

type SummaryItem = {
  title: string
  url: string
}

interface SummaryMenuProps {
  summary: SummaryItem[]
}

export const SummaryMenu = ({ summary }: SummaryMenuProps) => {
  return (
    <div className="col-span-1 ml-6 h-fit border-l border-neutral-200 pl-6 text-neutral-200 max-[1255px]:hidden">
      <h3 className="mb-4 text-sm font-bold text-neutral-500">NESTA PÁGINA</h3>

      <ul className="flex flex-col gap-2 text-sm text-neutral-400">
        {summary.map((item) => {
          return <SummaryItem key={item.url} title={item.title} url={item.url} />
        })}
      </ul>
    </div>
  )
}

interface SummaryItemProps {
  title: string
  url: string
}

const SummaryItem = ({ title, url }: SummaryItemProps) => {
  return (
    <li><a href={url}>{title}</a></li>
  )
}