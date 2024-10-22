import { MainContent } from "@/components/layout/main-content"
import { NOVO_TIPO_SERVICO_ACTIONS, NOVO_TIPO_SERVICO_MARKDOWN, NOVO_TIPO_SERVICO_SUMMARY } from "@/docs/tecnicos/2-novo-tipo-servico"

export default function RegistrarTipoServico() {
  return (
    <MainContent
      breadCrumb={[{ title: "Tecnicos" }, { title: "Registrar um tipo de serviço" }]}
      markdown={NOVO_TIPO_SERVICO_MARKDOWN}
      summary={NOVO_TIPO_SERVICO_SUMMARY}
      pagination={NOVO_TIPO_SERVICO_ACTIONS}
    />
  )
}