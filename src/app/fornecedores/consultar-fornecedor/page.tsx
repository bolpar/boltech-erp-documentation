import { MainContent } from "@/components/layout/main-content";
import { INTRODUCAO_FORNECEDORES_ACTIONS, INTRODUCAO_FORNECEDORES_MARKDOWN, INTRODUCAO_FORNECEDORES_SUMMARY } from "@/docs/fornecedores/@introducao";

export default function ConsultarFornecedor() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Fornecedores' }, { title: 'Introdução ao fluxo de fornecedores' }]}
      markdown={INTRODUCAO_FORNECEDORES_MARKDOWN}
      summary={INTRODUCAO_FORNECEDORES_SUMMARY}
      pagination={INTRODUCAO_FORNECEDORES_ACTIONS}
    />
  )
}