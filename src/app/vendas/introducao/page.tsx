import { MainContent } from "@/components/layout/main-content"
import { INTRODUCAO_VENDAS_ACTIONS, INTRODUCAO_VENDAS_MARKDOWN, INTRODUCAO_VENDAS_SUMMARY } from "@/docs/vendas/@introducao"

export default function Introducao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Introdução ao fluxo de vendas" }]}
      markdown={INTRODUCAO_VENDAS_MARKDOWN}
      summary={INTRODUCAO_VENDAS_SUMMARY}
      pagination={INTRODUCAO_VENDAS_ACTIONS}
    />
  )
}