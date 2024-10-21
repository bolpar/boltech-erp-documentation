import { MainContent } from "@/components/layout/main-content";
import { FORNECEDOR_FINANCEIRO_ACTIONS, FORNECEDOR_FINANCEIRO_MARKDOWN, FORNECEDOR_FINANCEIRO_SUMMARY } from "@/docs/fornecedores/2-financeiro";

export default function FinanceiroFornecedor() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Fornecedores' }, { title: 'Financeiro' }]}
      markdown={FORNECEDOR_FINANCEIRO_MARKDOWN}
      summary={FORNECEDOR_FINANCEIRO_SUMMARY}
      pagination={FORNECEDOR_FINANCEIRO_ACTIONS}
    />
  )
}