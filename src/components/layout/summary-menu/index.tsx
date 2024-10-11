'use client'

interface SummaryMenuProps {
  summary: Array<{
    title: string
    url: string
  }>
}

export const SummaryMenu = ({ summary }: SummaryMenuProps) => {

  return (
    <div className="col-span-1 ml-6 h-fit border-l border-neutral-200 pl-6 text-neutral-200 max-[1255px]:hidden">
      <h3 className="mb-4 text-sm font-bold text-neutral-500">NESTA PÁGINA</h3>

      <ul className="flex flex-col gap-2 text-sm text-neutral-400">
        {summary.map((item) => {

          return (
            <li key={item.url}>
              <a href={item.url} className="text-neutral-400 hover:text-green-500">
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
