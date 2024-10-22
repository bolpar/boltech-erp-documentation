import { MainContent } from "@/components/layout/main-content"
import { NOVO_TECNICO_ACTIONS, NOVO_TECNICO_MARKDOWN, NOVO_TECNICO_SUMMARY } from "@/docs/tecnicos/1-novo-tecnico"

export default function RegistrarTecnico() {
  return (
    <MainContent
      breadCrumb={[{ title: "Tecnicos" }, { title: "Registrar um técnico" }]}
      markdown={NOVO_TECNICO_MARKDOWN}
      summary={NOVO_TECNICO_SUMMARY}
      pagination={NOVO_TECNICO_ACTIONS}
    />
  )
}