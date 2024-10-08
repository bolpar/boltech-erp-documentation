import { BreadCrumb } from "@/components/bread-crumb";
import { FooterPagination } from "@/components/footer-pagination";
import { MarkdownContent } from "@/components/markdown-content";
import { SummaryMenu } from "../summary-menu";

interface MainContentProps {
  breadCrumb: Array<{
    title: string
  }>
  markdown: string
  summary: Array<{
    title: string
    url: string
  }>
  pagination: {
    previous: {
      title: string
      url: string
    },
    next: {
      title: string
      url: string
    }
  }
}

export const MainContent = ({ breadCrumb, markdown, summary, pagination }: MainContentProps) => {
  return (
    <div className="grid grid-cols-4 max-[1255px]:grid-cols-3">
      <div className="col-span-3 h-[85vh] overflow-y-scroll px-10 pb-16">
        <BreadCrumb items={breadCrumb} />
        <MarkdownContent markdown={markdown} />
        <FooterPagination pagination={pagination} />
      </div>

      <SummaryMenu summary={summary} />
    </div>
  )
}