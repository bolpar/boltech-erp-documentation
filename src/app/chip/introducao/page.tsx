import { MainContent } from "@/components/layout/main-content";
import { INTRODUCAO_CHIP_MARKDOWN } from "@/docs/chip/@introducao";
import { CONSULTAR_EQUIPAMENTO_ACTIONS, CONSULTAR_EQUIPAMENTO_SUMMARY } from "@/docs/equipamento/2-consultar-equipamentos";

export default function IntroducaoChip() {
  return (
    <MainContent
      breadCrumb={[{ title: "Chip" }, { title: "Chip" }]}
      markdown={INTRODUCAO_CHIP_MARKDOWN}
      summary={CONSULTAR_EQUIPAMENTO_SUMMARY}
      pagination={CONSULTAR_EQUIPAMENTO_ACTIONS}
    />
  )
}