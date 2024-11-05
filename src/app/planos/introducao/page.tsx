import { MainContent } from "@/components/layout/main-content";
import { INTRODUCAO_PLANOS_ACTIONS, INTRODUCAO_PLANOS_MARKDOWN, INTRODUCAO_PLANOS_SUMMARY } from "@/docs/planos/@introducao";

export default function IntroducaoPlanos() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Planos' }, { title: 'Introdução ao fluxo de planos' }]}
      markdown={INTRODUCAO_PLANOS_MARKDOWN}
      summary={INTRODUCAO_PLANOS_SUMMARY}
      pagination={INTRODUCAO_PLANOS_ACTIONS}
    />
  )
}