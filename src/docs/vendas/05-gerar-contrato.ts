export const GERAR_CONTRATO_MARKDOWN = `
# Contrato

A página **contrato** é destinada à geração e gestão dos contratos vinculados ao plano selecionado, com base nas informações do cliente e nos rastreadores adquiridos.

---

## Seleção de Rastreadores
Nesta seção, o usuário poderá selecionar os rastreadores para gerar o contrato correspondente ao plano escolhido. Em casos de vendas com mais de um rastreador, é possível optar por gerar um único contrato para todos os aparelhos ou um contrato separado para cada dispositivo.

---

## Geração Automática do Contrato
O sistema preenche automaticamente os dados necessários para gerar o contrato utilizando as informações fornecidas no cadastro do cliente. Esse preenchimento automático garante que todos os detalhes relevantes estejam incluídos no documento.

> **Atenção:** Verifique se os dados do cliente estão atualizados para evitar inconsistências no contrato gerado.

---

## Assinatura Digital do Contrato
Após a geração do contrato, clique no ícone da plataforma de assinatura para enviar o documento ao e-mail do cliente. O cliente poderá então assinar o contrato digitalmente.

- O sistema ERP Boltech utiliza a plataforma **Autentique** para gerenciar as assinaturas digitais dos contratos.
- Também é possível imprimir o contrato diretamente utilizando o botão "Imprimir" para obter uma cópia física do documento.

> **Dica:** O cliente recebe uma notificação por e-mail com um link seguro para realizar a assinatura digital, facilitando e acelerando o processo de finalização do contrato.
`

export const GERAR_CONTRATO_SUMMARY = [
  {
    title: "Seleção ",
    url: "#visão-geral"
  },
  {
    title: "Primeiros passos no sistema",
    url: "#primeiros-passos-no-sistema"
  },
  {
    title: "Configurações iniciais",
    url: "#configurações-iniciais"
  },
  {
    title: "Conclusão",
    url: "#conclusão"
  },
  {
    title: "Considerações finais",
    url: "#considerações-finais"
  },
]

export const GERAR_CONTRATO_ACTIONS = {
  previous: {
    title: "Gerar recebimento do pedido",
    url: "/vendas/gerar-recebimento"
  },
  next: {
    title: "Testar equipamento",
    url: "/vendas/testar-equipamento"
  }
}