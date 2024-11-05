import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_ATENDIMENTO_ACTIONS, CONSULTAR_ATENDIMENTO_MARKDOWN, CONSULTAR_ATENDIMENTO_SUMMARY } from "@/docs/suporte/2-consultar-atendimentos";

export default function SuporteConsulta() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Suporte' }, { title: 'Consultar atendimentos' }]}
      markdown={CONSULTAR_ATENDIMENTO_MARKDOWN}
      summary={CONSULTAR_ATENDIMENTO_SUMMARY}
      pagination={CONSULTAR_ATENDIMENTO_ACTIONS}
    />
  )
}