import { MainContent } from "@/components/layout/main-content"
import { CONSULTAR_VEICULOS_ACTIONS, CONSULTAR_VEICULOS_MARKDOWN, CONSULTAR_VEICULOS_SUMMARY } from "@/docs/veiculos/2-consultar-veiculos"

export default function VeiculosIntroducao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Veículos" }, { title: "Consultar veículos" }]}
      markdown={CONSULTAR_VEICULOS_MARKDOWN}
      summary={CONSULTAR_VEICULOS_SUMMARY}
      pagination={CONSULTAR_VEICULOS_ACTIONS}
    />
  )
}