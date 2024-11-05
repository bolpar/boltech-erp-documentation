import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_EQUIPAMENTO_ACTIONS, CONSULTAR_EQUIPAMENTO_MARKDOWN, CONSULTAR_EQUIPAMENTO_SUMMARY } from "@/docs/equipamento/2-consultar-equipamentos";

export default function ConsultarEquipamentos() {
  return (
    <MainContent
      breadCrumb={[{ title: "Equipamento" }, { title: "Consultar equipamentos" }]}
      markdown={CONSULTAR_EQUIPAMENTO_MARKDOWN}
      summary={CONSULTAR_EQUIPAMENTO_SUMMARY}
      pagination={CONSULTAR_EQUIPAMENTO_ACTIONS}
    />
  )
}