import { MainContent } from "@/components/layout/main-content"
import { TESTAR_EQUIPAMENTO_ACTIONS, TESTAR_EQUIPAMENTO_MARKDOWN, TESTAR_EQUIPAMENTO_SUMMARY } from "@/docs/vendas/06-testar-equipamento"

export default function TestarEquipamento() {
  return (
    <MainContent
      breadCrumb={[{ title: "Vendas" }, { title: "Testar equipamento" }]}
      markdown={TESTAR_EQUIPAMENTO_MARKDOWN}
      summary={TESTAR_EQUIPAMENTO_SUMMARY}
      pagination={TESTAR_EQUIPAMENTO_ACTIONS}
    />
  )
}