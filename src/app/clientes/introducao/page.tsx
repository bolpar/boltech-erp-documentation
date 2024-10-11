import { MainContent } from "@/components/layout/main-content";
import { INTRODUCAO_CLIENTE_ACTIONS, INTRODUCAO_CLIENTE_MARKDOWN, INTRODUCAO_CLIENTE_SUMMARY } from "@/docs/clientes/@introducao";

export default function Introducao() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Clientes' }, { title: 'Introdução ao fluxo de cliente' }]}
      markdown={INTRODUCAO_CLIENTE_MARKDOWN}
      summary={INTRODUCAO_CLIENTE_SUMMARY}
      pagination={INTRODUCAO_CLIENTE_ACTIONS}
    />
  )
}