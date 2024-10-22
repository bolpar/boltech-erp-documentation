import { MainContent } from "@/components/layout/main-content"
import { CONSULTAR_TECNICOS_ACTIONS, CONSULTAR_TECNICOS_MARKDOWN, CONSULTAR_TECNICOS_SUMMARY } from "@/docs/tecnicos/3-consultar-tecnicos"

export default function ConsultarTecnicos() {
  return (
    <MainContent
      breadCrumb={[{ title: "Tecnicos" }, { title: "Introdução ao fluxo de técnicos" }]}
      markdown={CONSULTAR_TECNICOS_MARKDOWN}
      summary={CONSULTAR_TECNICOS_SUMMARY}
      pagination={CONSULTAR_TECNICOS_ACTIONS}
    />
  )
}