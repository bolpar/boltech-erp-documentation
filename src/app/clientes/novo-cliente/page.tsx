import { MainContent } from "@/components/layout/main-content";
import { NOVO_CLIENTE_ACTIONS, NOVO_CLIENTE_MARKDOWN, NOVO_CLIENTE_SUMMARY } from "@/docs/clientes/1-novo-cliente";

export default function NovoCliente() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Clientes' }, { title: 'Criar um cliente' }]}
      markdown={NOVO_CLIENTE_MARKDOWN}
      summary={NOVO_CLIENTE_SUMMARY}
      pagination={NOVO_CLIENTE_ACTIONS}
    />
  )
}