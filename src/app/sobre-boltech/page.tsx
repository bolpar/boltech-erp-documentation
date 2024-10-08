import { MainContent } from "@/components/layout/main-content";
import { SOBRE_ACTIONS, SOBRE_MARKDOWN, SOBRE_SUMMARY } from "@/docs/@overview/04-sobre-boltech";

export default function SobreBoltech() {
  return (
    <MainContent
      breadCrumb={[{ title: "Sobre a Boltech" }]}
      markdown={SOBRE_MARKDOWN}
      summary={SOBRE_SUMMARY}
      pagination={SOBRE_ACTIONS}
    />
  )
}