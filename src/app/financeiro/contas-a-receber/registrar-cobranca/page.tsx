import { MainContent } from "@/components/layout/main-content"
import { REGISTRAR_COBRANCA_ACTIONS, REGISTRAR_COBRANCA_MARKDOWN, REGISTRAR_COBRANCA_SUMMARY } from "@/docs/financeiro/3-registrar-cobranca"

export default function RegistrarCobrancaFinanceiro() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Contas a receber" }, { title: "Registrar cobrança" }]}
      markdown={REGISTRAR_COBRANCA_MARKDOWN}
      summary={REGISTRAR_COBRANCA_SUMMARY}
      pagination={REGISTRAR_COBRANCA_ACTIONS}
    />
  )
}