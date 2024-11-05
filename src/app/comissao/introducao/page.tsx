import { MainContent } from "@/components/layout/main-content"
import { INTRODUCAO_COMISSAO_ACTIONS, INTRODUCAO_COMISSAO_MARKDOWN, INTRODUCAO_COMISSAO_SUMMARY } from "@/docs/comissao/@introducao"

export default function ComissaoIntroducao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Comissão" }, { title: "Introdução ao fluxo de comissão" }]}
      markdown={INTRODUCAO_COMISSAO_MARKDOWN}
      summary={INTRODUCAO_COMISSAO_SUMMARY}
      pagination={INTRODUCAO_COMISSAO_ACTIONS}
    />
  )
}