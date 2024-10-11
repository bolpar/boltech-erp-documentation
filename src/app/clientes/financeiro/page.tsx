import { MainContent } from "@/components/layout/main-content";
import { CLIENTE_FINANCEIRO_ACTIONS, CLIENTE_FINANCEIRO_MARKDOWN, CLIENTE_FINANCEIRO_SUMMARY } from "@/docs/clientes/3-financeiro";

export default function Financeiro() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Clientes' }, { title: 'Analisar o financeiro do cliente' }]}
      markdown={CLIENTE_FINANCEIRO_MARKDOWN}
      summary={CLIENTE_FINANCEIRO_SUMMARY}
      pagination={CLIENTE_FINANCEIRO_ACTIONS}
    />
  )
}