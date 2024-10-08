import { MainContent } from "@/components/layout/main-content";
import { BENEFICIOS_ACTIONS, BENEFICIOS_MARKDOWN, BENEFICIOS_SUMMARY } from "@/docs/@overview/02-beneficios";

export default function BeneficiosObjetivos() {
  return (
    <MainContent
      breadCrumb={[{ title: "Benefícios e Objetivos" }]}
      markdown={BENEFICIOS_MARKDOWN}
      summary={BENEFICIOS_SUMMARY}
      pagination={BENEFICIOS_ACTIONS}
    />
  )
}