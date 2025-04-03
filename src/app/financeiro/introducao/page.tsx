import { MainContent } from "@/components/layout/main-content"
import { INTRODUCAO_FINANCEIRO_ACTIONS, INTRODUCAO_FINANCEIRO_MARKDOWN, INTRODUCAO_FINANCEIRO_SUMMARY } from "@/docs/financeiro/@introducao"

export default function FinanceiroIntroducao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Introdução ao fluxo de financeiro" }]}
      markdown={INTRODUCAO_FINANCEIRO_MARKDOWN}
      summary={INTRODUCAO_FINANCEIRO_SUMMARY}
      pagination={INTRODUCAO_FINANCEIRO_ACTIONS}
    />
  )
}