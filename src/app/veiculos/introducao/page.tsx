import { MainContent } from "@/components/layout/main-content"
import { INTRODUCAO_VEICULOS_ACTIONS, INTRODUCAO_VEICULOS_MARKDOWN, INTRODUCAO_VEICULOS_SUMMARY } from "@/docs/veiculos/@introducao"

export default function VeiculosIntroducao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Veículos" }, { title: "Introdução ao fluxo de veículos" }]}
      markdown={INTRODUCAO_VEICULOS_MARKDOWN}
      summary={INTRODUCAO_VEICULOS_SUMMARY}
      pagination={INTRODUCAO_VEICULOS_ACTIONS}
    />
  )
}