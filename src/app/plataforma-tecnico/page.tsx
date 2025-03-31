import { MainContent } from "@/components/layout/main-content"
import { PLATAFORMA_TECNICO_ACTIONS, PLATAFORMA_TECNICO_MARKDOWN, PLATAFORMA_TECNICO_SUMMARY } from "@/docs/plataforma-tecnico/@introducao"

export default function PlataformaTecnico() {
  return (
    <MainContent
      breadCrumb={[{ title: "Plataforma Técnico" }]}
      markdown={PLATAFORMA_TECNICO_MARKDOWN}
      summary={PLATAFORMA_TECNICO_SUMMARY}
      pagination={PLATAFORMA_TECNICO_ACTIONS}
    />
  )
}