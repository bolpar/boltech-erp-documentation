'use client'

import { PDFButton } from "@/components/pdf-button"

interface SummaryMenuProps {
  summary: Array<{
    title: string
    url: string
    subLinks?: Array<{
      title: string
      url: string
    }>
  }>
  pdfContent: string
}

export const SummaryMenu = ({ summary, pdfContent }: SummaryMenuProps) => {
  return (
    <div className="col-span-1 ml-6 h-fit border-l border-neutral-200 pl-4 text-neutral-200 max-[1255px]:hidden">
      <PDFButton pdfContent={pdfContent} />

      <h3 className="mb-4 mt-4 text-sm font-bold text-neutral-500">NESTA PÁGINA</h3>

      <ul className="flex flex-col gap-4 text-sm text-neutral-400">
        {summary.map((item) => {
          return (
            <li key={item.url} className="flex flex-col gap-2">
              <a href={item.url} className="text-neutral-400 hover:text-green-500">
                {item.title}
              </a>

              {item.subLinks?.map((subLink) => {
                return (
                  <a
                    key={subLink.url}
                    href={subLink.url}
                    className="pl-4 text-neutral-400 hover:text-green-500"
                  >
                    {subLink.title}
                  </a>
                )
              })}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
