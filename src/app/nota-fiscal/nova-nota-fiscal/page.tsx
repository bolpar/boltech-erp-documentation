import { MainContent } from "@/components/layout/main-content";
import { NOVA_NOTA_FISCAL_ACTIONS, NOVA_NOTA_FISCAL_MARKDOWN, NOVA_NOTA_FISCAL_SUMMARY } from "@/docs/nota-fiscal/1-nova-nota-fiscal";

export default function NovaNotaFiscal() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Nota Fiscal' }, { title: 'Registrar nota fiscal' }]}
      markdown={NOVA_NOTA_FISCAL_MARKDOWN}
      summary={NOVA_NOTA_FISCAL_SUMMARY}
      pagination={NOVA_NOTA_FISCAL_ACTIONS}
    />
  )
}