import { MainContent } from "@/components/layout/main-content";
import { PRODUTO_INTRODUCAO_ACTIONS, PRODUTO_INTRODUCAO_MARKDOWN, PRODUTO_INTRODUCAO_SUMMARY } from "@/docs/produto/@introducao";

export default function IntroducaoProduto() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Produto' }, { title: 'Introdução Produto' }]}
      markdown={PRODUTO_INTRODUCAO_MARKDOWN}
      summary={PRODUTO_INTRODUCAO_SUMMARY}
      pagination={PRODUTO_INTRODUCAO_ACTIONS}
    />
  )
}