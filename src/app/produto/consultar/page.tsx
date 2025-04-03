import { MainContent } from "@/components/layout/main-content";
import { CONSULTA_PRODUTOS_ACTIONS, CONSULTA_PRODUTOS_MARKDOWN, CONSULTA_PRODUTOS_SUMMARY } from "@/docs/produto/2-consulta-produtos";

export default function ConsultarProduto() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Produto' }, { title: 'Consulta Produto' }]}
      markdown={CONSULTA_PRODUTOS_MARKDOWN}
      summary={CONSULTA_PRODUTOS_SUMMARY}
      pagination={CONSULTA_PRODUTOS_ACTIONS}
    />
  )
}