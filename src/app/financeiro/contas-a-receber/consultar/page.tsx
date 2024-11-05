import { MainContent } from "@/components/layout/main-content"
import { INTRODUCAO_TECNICOS_ACTIONS, INTRODUCAO_TECNICOS_MARKDOWN, INTRODUCAO_TECNICOS_SUMMARY } from "@/docs/tecnicos/@introducao"

export default function ConsultarContasAReceberFinanceiro() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Contas a receber" }, { title: "Consultar" }]}
      markdown={INTRODUCAO_TECNICOS_MARKDOWN}
      summary={INTRODUCAO_TECNICOS_SUMMARY}
      pagination={INTRODUCAO_TECNICOS_ACTIONS}
    />
  )
}