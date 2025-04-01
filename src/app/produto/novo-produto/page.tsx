import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_PLANOS_ACTIONS, CONSULTAR_PLANOS_SUMMARY } from "@/docs/planos/2-consultar-planos";
import { NOVO_PRODUTO_MARKDOWN } from "@/docs/produto/1-novo-produto";

export default function NovoProduto() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Produto' }, { title: 'Novo Produto' }]}
      markdown={NOVO_PRODUTO_MARKDOWN}
      summary={CONSULTAR_PLANOS_SUMMARY}
      pagination={CONSULTAR_PLANOS_ACTIONS}
    />
  )
}