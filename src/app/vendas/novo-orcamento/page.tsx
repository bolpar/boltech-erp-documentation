import { MainContent } from "@/components/layout/main-content"
import { NOVO_ORCAMENTO_ACTIONS, NOVO_ORCAMENTO_MARKDOWN, NOVO_ORCAMENTO_SUMMARY } from "@/docs/vendas/01-novo-orcamento"

export default function NovoOrcamento() {
  return (
    <MainContent
      breadCrumb={[{ title: "Vendas" }, { title: "Criar orçamento de pedido" }]}
      markdown={NOVO_ORCAMENTO_MARKDOWN}
      summary={NOVO_ORCAMENTO_SUMMARY}
      pagination={NOVO_ORCAMENTO_ACTIONS}
    />
  )
}