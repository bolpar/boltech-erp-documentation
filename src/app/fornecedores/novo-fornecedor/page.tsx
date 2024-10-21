import { MainContent } from "@/components/layout/main-content";
import { NOVO_FORNECEDOR_ACTIONS, NOVO_FORNECEDOR_MARKDOWN, NOVO_FORNECEDOR_SUMMARY } from "@/docs/fornecedores/1-novo-fornecedor";

export default function NovoFornecedor() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Fornecedor' }, { title: 'Registrar um fornecedor' }]}
      markdown={NOVO_FORNECEDOR_MARKDOWN}
      summary={NOVO_FORNECEDOR_SUMMARY}
      pagination={NOVO_FORNECEDOR_ACTIONS}
    />
  )
}