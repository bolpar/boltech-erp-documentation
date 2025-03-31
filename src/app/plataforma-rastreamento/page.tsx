import { MainContent } from "@/components/layout/main-content"
import { INICIANDO_ACTIONS, INICIANDO_MARKDOWN, INICIANDO_SUMMARY } from "@/docs/@overview/03-iniciando-erp"

export default function PlataformaRastreamento() {
  return (
    <MainContent
      breadCrumb={[{ title: "Iniciando no ERP" }]}
      markdown={INICIANDO_MARKDOWN}
      summary={INICIANDO_SUMMARY}
      pagination={INICIANDO_ACTIONS}
    />
  )
}