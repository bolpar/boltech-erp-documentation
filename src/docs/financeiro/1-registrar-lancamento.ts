export const REGISTRAR_LANCAMENTO_MARKDOWN = `
# Registrar um Lançamento em Contas a Pagar

A página de **Lançamento Manual** no Boltech ERP é a base para inserir e gerenciar os lançamentos financeiros relacionados às contas a pagar. Ela é composta por duas seções principais, cada uma com um conjunto de campos que garantem o registro detalhado e organizado das obrigações financeiras da empresa.

---

## Informações do Lançamento

Nesta seção inicial, você deve preencher os dados gerais do lançamento. Ela inclui campos para identificar o fornecedor, as informações do documento, datas relevantes e a categorização financeira do lançamento. Ao selecionar o fornecedor e clicar em pesquisar, os dados cadastrados desse fornecedor serão carregados automaticamente nos campos apropriados, agilizando o processo.

![Campo informações do lançamento](/images/financeiro/contas-a-pagar/lancamento-manual/01.gif)

>**Importante**: Esta etapa é crucial para assegurar que todas as informações necessárias sejam registradas corretamente antes de avançar para o parcelamento ou outras operações.

---

## Tabela de Parcelas Geradas

A tabela exibe as parcelas criadas com base nas configurações anteriores, mostrando detalhes essenciais como valores e datas de vencimento. Ela oferece uma visão clara e prática das obrigações financeiras futuras, facilitando a gestão do fluxo de caixa e o acompanhamento dos pagamentos.

![Tabela de parcelas](/images/financeiro/contas-a-pagar/lancamento-manual/02.gif)

`

export const REGISTRAR_LANCAMENTO_SUMMARY = [
  {
    title: "Informações do lançamento",
    url: "#informações-do-lançamento"
  },
  {
    title: "Lançamento de duplicata",
    url: "#lançamento-de-duplicata"
  },
  {
    title: "Tabela de parcelas geradas",
    url: "#tabela-de-parcelas-geradas"
  },
]

export const REGISTRAR_LANCAMENTO_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}