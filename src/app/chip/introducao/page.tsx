import { MainContent } from "@/components/layout/main-content";
import { INTRODUCAO_CHIP_ACTIONS, INTRODUCAO_CHIP_MARKDOWN, INTRODUCAO_CHIP_SUMMARY } from "@/docs/chip/@introducao";

export default function IntroducaoChip() {
  return (
    <MainContent
      breadCrumb={[{ title: "Chip" }, { title: "Chip" }]}
      markdown={INTRODUCAO_CHIP_MARKDOWN}
      summary={INTRODUCAO_CHIP_SUMMARY}
      pagination={INTRODUCAO_CHIP_ACTIONS}
    />
  )
}