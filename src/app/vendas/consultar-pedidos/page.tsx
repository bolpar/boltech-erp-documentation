import { MainContent } from "@/components/layout/main-content"
import { CONSULTAR_PEDIDOS_ACTIONS, CONSULTAR_PEDIDOS_MARKDOWN, CONSULTAR_PEDIDOS_SUMMARY } from "@/docs/vendas/07-consultar-pedidos"

export default function ConsultarPedidos() {
  return (
    <MainContent
      breadCrumb={[{ title: "Consultar pedidos de venda" }]}
      markdown={CONSULTAR_PEDIDOS_MARKDOWN}
      summary={CONSULTAR_PEDIDOS_SUMMARY}
      pagination={CONSULTAR_PEDIDOS_ACTIONS}
    />
  )
}