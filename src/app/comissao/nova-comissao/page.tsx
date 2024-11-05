import { MainContent } from "@/components/layout/main-content"
import { NOVA_COMISSAO_ACTIONS, NOVA_COMISSAO_MARKDOWN, NOVA_COMISSAO_SUMMARY } from "@/docs/comissao/1-nova-comissao"


export default function NovaComissao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Comissão" }, { title: "Nova comissão" }]}
      markdown={NOVA_COMISSAO_MARKDOWN}
      summary={NOVA_COMISSAO_SUMMARY}
      pagination={NOVA_COMISSAO_ACTIONS}
    />
  )
}