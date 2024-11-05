import { MainContent } from "@/components/layout/main-content"
import { INTRODUCAO_FINANCEIRO_MARKDOWN } from "@/docs/financeiro/@introducao"
import { INTRODUCAO_TECNICOS_ACTIONS, INTRODUCAO_TECNICOS_SUMMARY } from "@/docs/tecnicos/@introducao"

export default function FinanceiroIntroducao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Introdução ao fluxo de financeiro" }]}
      markdown={INTRODUCAO_FINANCEIRO_MARKDOWN}
      summary={INTRODUCAO_TECNICOS_SUMMARY}
      pagination={INTRODUCAO_TECNICOS_ACTIONS}
    />
  )
}