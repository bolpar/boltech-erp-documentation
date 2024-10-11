import { MainContent } from "@/components/layout/main-content";
import { REGISTRAR_VEICULO_CLIENTE_ACTIONS, REGISTRAR_VEICULO_CLIENTE_MARKDOWN, REGISTRAR_VEICULO_CLIENTE_SUMMARY } from "@/docs/clientes/2-registrar-veiculo-cliente";

export default function RegistrarVeiculoCliente() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Clientes' }, { title: 'Registar o veículo do cliente' }]}
      markdown={REGISTRAR_VEICULO_CLIENTE_MARKDOWN}
      summary={REGISTRAR_VEICULO_CLIENTE_SUMMARY}
      pagination={REGISTRAR_VEICULO_CLIENTE_ACTIONS}
    />
  )
}