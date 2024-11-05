import { MainContent } from "@/components/layout/main-content";
import { NOVO_EQUIPAMENTO_ACTIONS, NOVO_EQUIPAMENTO_MARKDOWN, NOVO_EQUIPAMENTO_SUMMARY } from "@/docs/equipamento/1-novo-equipamento";

export default function NovoEquipamento() {
  return (
    <MainContent
      breadCrumb={[{ title: "Equipamento" }, { title: "Novo equipamento" }]}
      markdown={NOVO_EQUIPAMENTO_MARKDOWN}
      summary={NOVO_EQUIPAMENTO_SUMMARY}
      pagination={NOVO_EQUIPAMENTO_ACTIONS}
    />
  )
}