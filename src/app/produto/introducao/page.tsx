import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_PLANOS_ACTIONS, CONSULTAR_PLANOS_SUMMARY } from "@/docs/planos/2-consultar-planos";
import { PRODUTO_INTRODUCAO_MARKDOWN } from "@/docs/produto/@introducao";

export default function IntroducaoProduto() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Produto' }, { title: 'Introdução Produto' }]}
      markdown={PRODUTO_INTRODUCAO_MARKDOWN}
      summary={CONSULTAR_PLANOS_SUMMARY}
      pagination={CONSULTAR_PLANOS_ACTIONS}
    />
  )
}