import { MainContent } from "@/components/layout/main-content";
import { INTRODUCAO_EQUIPAMENTO_ACTIONS, INTRODUCAO_EQUIPAMENTO_MARKDOWN, INTRODUCAO_EQUIPAMENTO_SUMMARY } from "@/docs/equipamento/@introducao";

export default function IntroducaoEquipamento() {
  return (
    <MainContent
      breadCrumb={[{ title: "Equipamento" }, { title: "Introdução ao fluxo de equipamentos" }]}
      markdown={INTRODUCAO_EQUIPAMENTO_MARKDOWN}
      summary={INTRODUCAO_EQUIPAMENTO_SUMMARY}
      pagination={INTRODUCAO_EQUIPAMENTO_ACTIONS}
    />
  )
}