import { MainContent } from "@/components/layout/main-content";
import { NOVO_CHIP_MARKDOWN } from "@/docs/chip/1-novo-chip";
import { CONSULTAR_EQUIPAMENTO_ACTIONS, CONSULTAR_EQUIPAMENTO_SUMMARY } from "@/docs/equipamento/2-consultar-equipamentos";

export default function NovoChip() {
  return (
    <MainContent
      breadCrumb={[{ title: "Chip" }, { title: "Chip" }]}
      markdown={NOVO_CHIP_MARKDOWN}
      summary={CONSULTAR_EQUIPAMENTO_SUMMARY}
      pagination={CONSULTAR_EQUIPAMENTO_ACTIONS}
    />
  )
}