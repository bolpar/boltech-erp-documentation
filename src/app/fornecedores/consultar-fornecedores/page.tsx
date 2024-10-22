import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_FORNECEDORES_ACTIONS, CONSULTAR_FORNECEDORES_MARKDOWN, CONSULTAR_FORNECEDORES_SUMMARY } from "@/docs/fornecedores/3-consultar-fornecedores";

export default function ConsultarFornecedores() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Fornecedores' }, { title: 'Introdução ao fluxo de fornecedores' }]}
      markdown={CONSULTAR_FORNECEDORES_MARKDOWN}
      summary={CONSULTAR_FORNECEDORES_SUMMARY}
      pagination={CONSULTAR_FORNECEDORES_ACTIONS}
    />
  )
}