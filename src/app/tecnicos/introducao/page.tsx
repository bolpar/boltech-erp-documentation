import { MainContent } from "@/components/layout/main-content"
import { INTRODUCAO_TECNICOS_ACTIONS, INTRODUCAO_TECNICOS_MARKDOWN, INTRODUCAO_TECNICOS_SUMMARY } from "@/docs/tecnicos/@introducao"

export default function TecnicosIntroducao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Tecnicos" }, { title: "Introdução ao fluxo de técnicos" }]}
      markdown={INTRODUCAO_TECNICOS_MARKDOWN}
      summary={INTRODUCAO_TECNICOS_SUMMARY}
      pagination={INTRODUCAO_TECNICOS_ACTIONS}
    />
  )
}