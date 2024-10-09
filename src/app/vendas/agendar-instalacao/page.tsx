import { MainContent } from "@/components/layout/main-content"
import { AGENDAR_INSTALACAO_ACTIONS, AGENDAR_INSTALACAO_MARKDOWN, AGENDAR_INSTALACAO_SUMMARY } from "@/docs/vendas/02-agendar-instalacao"

export default function AgendarInstalacao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Agendar instalação do pedido" }]}
      markdown={AGENDAR_INSTALACAO_MARKDOWN}
      summary={AGENDAR_INSTALACAO_SUMMARY}
      pagination={AGENDAR_INSTALACAO_ACTIONS}
    />
  )
}