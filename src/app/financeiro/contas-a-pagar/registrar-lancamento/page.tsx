import { MainContent } from "@/components/layout/main-content"
import { REGISTRAR_LANCAMENTO_ACTIONS, REGISTRAR_LANCAMENTO_MARKDOWN, REGISTRAR_LANCAMENTO_SUMMARY } from "@/docs/financeiro/1-registrar-lancamento"

export default function RegistrarLancamentoFinanceiro() {
  return (
    <MainContent
      breadCrumb={[{ title: "Financeiro" }, { title: "Contas a pagar" }, { title: "Registrar lançamento" }]}
      markdown={REGISTRAR_LANCAMENTO_MARKDOWN}
      summary={REGISTRAR_LANCAMENTO_SUMMARY}
      pagination={REGISTRAR_LANCAMENTO_ACTIONS}
    />
  )
}