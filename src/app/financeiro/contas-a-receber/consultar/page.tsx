import { MainContent } from "@/components/layout/main-content"
import { CONSULTAR_CONTAS_A_RECEBER_MARKDOWN } from "@/docs/financeiro/4-consultar-contas-a-receber"
import { INTRODUCAO_TECNICOS_ACTIONS, INTRODUCAO_TECNICOS_SUMMARY } from "@/docs/tecnicos/@introducao"

export default function ConsultarContasAReceberFinanceiro() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Contas a receber" }, { title: "Consultar" }]}
      markdown={CONSULTAR_CONTAS_A_RECEBER_MARKDOWN}
      summary={INTRODUCAO_TECNICOS_SUMMARY}
      pagination={INTRODUCAO_TECNICOS_ACTIONS}
    />
  )
}