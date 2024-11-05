import { MainContent } from "@/components/layout/main-content"
import { CONSULTAR_COMISSAO_ACTIONS, CONSULTAR_COMISSAO_MARKDOWN, CONSULTAR_COMISSAO_SUMMARY } from "@/docs/comissao/2-consultar-comissoes"

export default function ComissaoConsultar() {
  return (
    <MainContent
      breadCrumb={[{ title: "Comissão" }, { title: "Consultar comissões" }]}
      markdown={CONSULTAR_COMISSAO_MARKDOWN}
      summary={CONSULTAR_COMISSAO_SUMMARY}
      pagination={CONSULTAR_COMISSAO_ACTIONS}
    />
  )
}