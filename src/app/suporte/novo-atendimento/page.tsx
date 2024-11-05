import { MainContent } from "@/components/layout/main-content";
import { ABRIR_NOVO_ATENDIMENTO_ACTIONS, ABRIR_NOVO_ATENDIMENTO_MARKDOWN, ABRIR_NOVO_ATENDIMENTO_SUMMARY } from "@/docs/suporte/1-abrir-novo-atendimento";

export default function NovoAtendimento() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Suporte' }, { title: 'Registrar novo atendimento' }]}
      markdown={ABRIR_NOVO_ATENDIMENTO_MARKDOWN}
      summary={ABRIR_NOVO_ATENDIMENTO_SUMMARY}
      pagination={ABRIR_NOVO_ATENDIMENTO_ACTIONS}
    />
  )
}