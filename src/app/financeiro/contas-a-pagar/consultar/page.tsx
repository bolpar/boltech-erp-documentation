import { MainContent } from "@/components/layout/main-content"
import { CONSULTAR_CONTAS_A_PAGAR_ACTIONS, CONSULTAR_CONTAS_A_PAGAR_MARKDOWN, CONSULTAR_CONTAS_A_PAGAR_SUMMARY } from "@/docs/financeiro/2-consultar-contas-a-pagar"

export default function ContasAPagarFinanceiro() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Contas a pagar" }, { title: "Consultar" }]}
      markdown={CONSULTAR_CONTAS_A_PAGAR_MARKDOWN}
      summary={CONSULTAR_CONTAS_A_PAGAR_SUMMARY}
      pagination={CONSULTAR_CONTAS_A_PAGAR_ACTIONS}
    />
  )
}