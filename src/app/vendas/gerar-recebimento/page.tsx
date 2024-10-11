import { MainContent } from "@/components/layout/main-content"
import { GERAR_RECEBIMENTO_ACTIONS, GERAR_RECEBIMENTO_MARKDOWN, GERAR_RECEBIMENTO_SUMMARY } from "@/docs/vendas/04-gerar-recebimento"

export default function GerarRecebimento() {
  return (
    <MainContent
      breadCrumb={[{ title: "Vendas" }, { title: "Gerar recebimento do pedido" }]}
      markdown={GERAR_RECEBIMENTO_MARKDOWN}
      summary={GERAR_RECEBIMENTO_SUMMARY}
      pagination={GERAR_RECEBIMENTO_ACTIONS}
    />
  )
}