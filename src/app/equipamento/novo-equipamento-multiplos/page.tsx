import { MainContent } from "@/components/layout/main-content";
import { NOVO_EQUIPAMENTOS_MULTIPLOS_ACTIONS, NOVO_EQUIPAMENTOS_MULTIPLOS_MARKDOWN, NOVO_EQUIPAMENTOS_MULTIPLOS_SUMMARY } from "@/docs/equipamento/3-novo-equipamentos-multiplos";

export default function NovoEquipamentoMultiplos() {
  return (
    <MainContent
      breadCrumb={[{ title: "Equipamento" }, { title: "Novo equipamento" }]}
      markdown={NOVO_EQUIPAMENTOS_MULTIPLOS_MARKDOWN}
      summary={NOVO_EQUIPAMENTOS_MULTIPLOS_SUMMARY}
      pagination={NOVO_EQUIPAMENTOS_MULTIPLOS_ACTIONS}
    />
  )
}