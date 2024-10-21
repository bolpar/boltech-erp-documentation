import { MainContent } from "@/components/layout/main-content";
import { CLIENTE_SERVICOS_ACTIONS, CLIENTE_SERVICOS_MARKDOWN, CLIENTE_SERVICOS_SUMMARY } from "@/docs/clientes/5-services";

export default function ConsultarServicosCliente() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Clientes' }, { title: 'Consultar serviços com o cliente' }]}
      markdown={CLIENTE_SERVICOS_MARKDOWN}
      summary={CLIENTE_SERVICOS_SUMMARY}
      pagination={CLIENTE_SERVICOS_ACTIONS}
    />
  )
}