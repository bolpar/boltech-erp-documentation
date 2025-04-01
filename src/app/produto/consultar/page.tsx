import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_PLANOS_ACTIONS, CONSULTAR_PLANOS_SUMMARY } from "@/docs/planos/2-consultar-planos";
import { CONSULTA_PRODUTOS_MARKDOWN } from "@/docs/produto/2-consulta-produtos";

export default function ConsultarProduto() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Produto' }, { title: 'Consulta Produto' }]}
      markdown={CONSULTA_PRODUTOS_MARKDOWN}
      summary={CONSULTAR_PLANOS_SUMMARY}
      pagination={CONSULTAR_PLANOS_ACTIONS}
    />
  )
}