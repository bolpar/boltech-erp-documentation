import { MainContent } from "@/components/layout/main-content";
import { NOVO_PLANO_ACTIONS, NOVO_PLANO_MARKDOWN, NOVO_PLANO_SUMMARY } from "@/docs/planos/1-novo-plano";

export default function RegistrarPlano() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Planos' }, { title: 'Registar um plano' }]}
      markdown={NOVO_PLANO_MARKDOWN}
      summary={NOVO_PLANO_SUMMARY}
      pagination={NOVO_PLANO_ACTIONS}
    />
  )
}