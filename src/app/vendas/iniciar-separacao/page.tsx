import { MainContent } from "@/components/layout/main-content"
import { INICIAR_SEPARACAO_ACTIONS, INICIAR_SEPARACAO_MARKDOWN, INICIAR_SEPARACAO_SUMMARY } from "@/docs/vendas/03-iniciar-separacao"

export default function IniciarSeparacao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Vendas" }, { title: "Iniciar separação do pedido" }]}
      markdown={INICIAR_SEPARACAO_MARKDOWN}
      summary={INICIAR_SEPARACAO_SUMMARY}
      pagination={INICIAR_SEPARACAO_ACTIONS}
    />
  )
}