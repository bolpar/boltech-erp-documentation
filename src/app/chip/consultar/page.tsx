import { MainContent } from "@/components/layout/main-content";
import { CONSULTA_CHIPS_MARKDOWN } from "@/docs/chip/2-consultar-chips";
import { CONSULTAR_EQUIPAMENTO_ACTIONS, CONSULTAR_EQUIPAMENTO_SUMMARY } from "@/docs/equipamento/2-consultar-equipamentos";

export default function ConsultarChip() {
  return (
    <MainContent
      breadCrumb={[{ title: "Chip" }, { title: "Chip" }]}
      markdown={CONSULTA_CHIPS_MARKDOWN}
      summary={CONSULTAR_EQUIPAMENTO_SUMMARY}
      pagination={CONSULTAR_EQUIPAMENTO_ACTIONS}
    />
  )
}