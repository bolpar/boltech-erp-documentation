import { MainContent } from "@/components/layout/main-content"
import { REGISTRAR_COBRANCA_MARKDOWN } from "@/docs/financeiro/3-registrar-cobranca"
import { INTRODUCAO_TECNICOS_ACTIONS, INTRODUCAO_TECNICOS_SUMMARY } from "@/docs/tecnicos/@introducao"

export default function RegistrarCobrancaFinanceiro() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Contas a receber" }, { title: "Registrar cobrança" }]}
      markdown={REGISTRAR_COBRANCA_MARKDOWN}
      summary={INTRODUCAO_TECNICOS_SUMMARY}
      pagination={INTRODUCAO_TECNICOS_ACTIONS}
    />
  )
}