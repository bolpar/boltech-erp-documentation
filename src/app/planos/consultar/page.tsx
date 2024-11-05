import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_PLANOS_ACTIONS, CONSULTAR_PLANOS_MARKDOWN, CONSULTAR_PLANOS_SUMMARY } from "@/docs/planos/2-consultar-planos";

export default function ConsultarPlanos() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Planos' }, { title: 'Consultar planos' }]}
      markdown={CONSULTAR_PLANOS_MARKDOWN}
      summary={CONSULTAR_PLANOS_SUMMARY}
      pagination={CONSULTAR_PLANOS_ACTIONS}
    />
  )
}