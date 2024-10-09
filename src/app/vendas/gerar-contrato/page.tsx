import { MainContent } from "@/components/layout/main-content"
import { GERAR_CONTRATO_ACTIONS, GERAR_CONTRATO_MARKDOWN, GERAR_CONTRATO_SUMMARY } from "@/docs/vendas/05-gerar-contrato"

export default function GerarContrato() {
  return (
    <MainContent
      breadCrumb={[{ title: "Gerar contrato do pedido" }]}
      markdown={GERAR_CONTRATO_MARKDOWN}
      summary={GERAR_CONTRATO_SUMMARY}
      pagination={GERAR_CONTRATO_ACTIONS}
    />
  )
}