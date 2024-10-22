import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_CLIENTES_ACTIONS, CONSULTAR_CLIENTES_MARKDOWN, CONSULTAR_CLIENTES_SUMMARY } from "@/docs/clientes/6-consultar-clientes";

export default function ConsultarClientes() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Clientes' }, { title: 'Consultar clientes' }]}
      markdown={CONSULTAR_CLIENTES_MARKDOWN}
      summary={CONSULTAR_CLIENTES_SUMMARY}
      pagination={CONSULTAR_CLIENTES_ACTIONS}
    />
  )
}