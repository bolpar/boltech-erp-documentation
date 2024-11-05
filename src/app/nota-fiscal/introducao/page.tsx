import { MainContent } from "@/components/layout/main-content";
import { INTRODUCAO_FORNECEDORES_SUMMARY } from "@/docs/fornecedores/@introducao";
import { INTRODUCAO_NOTA_FISCAL_ACTIONS, INTRODUCAO_NOTA_FISCAL_MARKDOWN } from "@/docs/nota-fiscal/@introducao";

export default function IntroducaoNotaFiscal() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Nota Fiscal' }, { title: 'Introdução ao fluxo de nota fiscal' }]}
      markdown={INTRODUCAO_NOTA_FISCAL_MARKDOWN}
      summary={INTRODUCAO_FORNECEDORES_SUMMARY}
      pagination={INTRODUCAO_NOTA_FISCAL_ACTIONS}
    />
  )
}