export const FORNECEDOR_FINANCEIRO_MARKDOWN = `
# Financeiro

A página **financeiro** é fundamental para acompanhar e gerenciar a situação financeira do fornecedor. Nela, você encontrará um resumo dos dados financeiros em forma de cards e uma tabela com detalhes das faturas.

---

## Resumo Financeiro do Fornecedor

No topo da página, diversos cards exibem informações financeiras essenciais, como *faturas pagas*, *recebido*, *a receber* e *total*. Esses cards oferecem uma visão rápida e clara do estado financeiro do fornecedor.

![Dados do fornecedor](/images/fornecedores/financeiro/01.webp)

---

## Tabela de Faturas

Abaixo dos cards, uma tabela apresenta as faturas do fornecedor, organizada em colunas que incluem *parcelas*, *data de emissão*, *data do vencimento*, *data do pagamento*, *valor*, *juros*, *multa*, *valor pago* e *status*. É possível exportar o relatório usando o botão **Exportar relatório**, além de filtrar as faturas por *condição*, *data de emissão* e *data de vencimento*.

![Tabela de faturas](/images/fornecedores/financeiro/02.webp)

---

## Ações Disponíveis

Na mesma linha da fatura, você encontrará dois ícones: um para visualizar detalhes da fatura e outro para abrir a opção de pagamento.

### Detalhes da fatura

Ao clicar no **ícone de olho**, uma modal se abre, mostrando informações detalhadas sobre a fatura, incluindo *informações gerais*, *detalhes das notificações* e *histórico*.

![Painel de detalhes da fatura](/images/fornecedores/financeiro/03.gif)

>**Observação**: Os botões **editar** e **deletar** só aparecem em caso da fatura estar em aberto.

### Pagar fatura

Para efetuar um pagamento de fatura de forma fácil e rápida, basta clicar no **ícone de moedas na mão**.

---

Agora, você está pronto para acompanhar a situação financeira do fornecedor, visualizando faturas pagas e pendentes, acessando detalhes de cada fatura e realizando pagamentos de forma rápida e eficiente.
`

export const FORNECEDOR_FINANCEIRO_SUMMARY = [
  {
    title: "Resumo financeiro do fornecedor",
    url: "#resumo-financeiro-do-fornecedor"
  },
  {
    title: "Tabela de faturas",
    url: "#tabela-de-faturas"
  },
  {
    title: "Ações disponíveis",
    url: "#ações-disponíveis",
    subLinks: [{
      title: "Detalhes da fatura",
      url: "#detalhes-da-fatura"
    },
    {
      title: "Pagar fatura",
      url: "#pagar-fatura"
    }]
  },
]

export const FORNECEDOR_FINANCEIRO_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar fornecedor",
    url: "/fornecedors/novo-fornecedor"
  }
}