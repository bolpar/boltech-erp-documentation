import { MainContent } from "@/components/layout/main-content"
import { CONSULTAR_CONTAS_A_RECEBER_ACTIONS, CONSULTAR_CONTAS_A_RECEBER_MARKDOWN, CONSULTAR_CONTAS_A_RECEBER_SUMMARY } from "@/docs/financeiro/4-consultar-contas-a-receber"

export default function ConsultarContasAReceberFinanceiro() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Contas a receber" }, { title: "Consultar" }]}
      markdown={CONSULTAR_CONTAS_A_RECEBER_MARKDOWN}
      summary={CONSULTAR_CONTAS_A_RECEBER_SUMMARY}
      pagination={CONSULTAR_CONTAS_A_RECEBER_ACTIONS}
    />
  )
}