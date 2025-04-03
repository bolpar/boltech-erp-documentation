import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_PRODUTOS_ACTIONS, CONSULTAR_PRODUTOS_SUMMARY, NOVO_PRODUTO_MARKDOWN } from "@/docs/produto/1-novo-produto";

export default function NovoProduto() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Produto' }, { title: 'Novo Produto' }]}
      markdown={NOVO_PRODUTO_MARKDOWN}
      summary={CONSULTAR_PRODUTOS_SUMMARY}
      pagination={CONSULTAR_PRODUTOS_ACTIONS}
    />
  )
}