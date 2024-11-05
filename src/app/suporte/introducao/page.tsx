import { MainContent } from "@/components/layout/main-content";
import { INTRODUCAO_SUPORTE_ACTIONS, INTRODUCAO_SUPORTE_MARKDOWN, INTRODUCAO_SUPORTE_SUMMARY } from "@/docs/suporte/@introducao";

export default function SuporteIntroducao() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Suporte' }, { title: 'Introdução ao fluxo de suporte' }]}
      markdown={INTRODUCAO_SUPORTE_MARKDOWN}
      summary={INTRODUCAO_SUPORTE_SUMMARY}
      pagination={INTRODUCAO_SUPORTE_ACTIONS}
    />
  )
}