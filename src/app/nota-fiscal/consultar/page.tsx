import { MainContent } from "@/components/layout/main-content";
import { CONSULTAR_NOTA_FISCAL_ACTIONS, CONSULTAR_NOTA_FISCAL_MARKDOWN, CONSULTAR_NOTA_FISCAL_SUMMARY } from "@/docs/nota-fiscal/2-consultar-nota-fiscal";

export default function ConsultarNotaFiscal() {
  return (
    <MainContent
      breadCrumb={[{ title: 'Nota Fiscal' }, { title: 'Consultar nota fiscal' }]}
      markdown={CONSULTAR_NOTA_FISCAL_MARKDOWN}
      summary={CONSULTAR_NOTA_FISCAL_SUMMARY}
      pagination={CONSULTAR_NOTA_FISCAL_ACTIONS}
    />
  )
}