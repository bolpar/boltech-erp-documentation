import { MainContent } from "@/components/layout/main-content"
import { NOVO_VEICULO_ACTIONS, NOVO_VEICULO_MARKDOWN, NOVO_VEICULO_SUMMARY } from "@/docs/veiculos/1-novo-veiculo"

export default function RegistrarVeiculo() {
  return (
    <MainContent
      breadCrumb={[{ title: "Veículos" }, { title: "Registrar um veículo" }]}
      markdown={NOVO_VEICULO_MARKDOWN}
      summary={NOVO_VEICULO_SUMMARY}
      pagination={NOVO_VEICULO_ACTIONS}
    />
  )
}