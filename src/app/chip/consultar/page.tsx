import { MainContent } from "@/components/layout/main-content";
import { CONSULTA_CHIPS_MARKDOWN, CONSULTAR_CHIPS_ACTIONS, CONSULTAR_CHIPS_SUMMARY } from "@/docs/chip/2-consultar-chips";

export default function ConsultarChip() {
  return (
    <MainContent
      breadCrumb={[{ title: "Chip" }, { title: "Chip" }]}
      markdown={CONSULTA_CHIPS_MARKDOWN}
      summary={CONSULTAR_CHIPS_SUMMARY}
      pagination={CONSULTAR_CHIPS_ACTIONS}
    />
  )
}