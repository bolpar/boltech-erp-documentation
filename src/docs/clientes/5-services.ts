export const CLIENTE_SERVICOS_MARKDOWN = `
# Consultar serviços com o cliente
## (Página em desenvolvimento)
![Tabela de serviços](/images/clientes/consultar-servicos-cliente/01.webp)
`

export const CLIENTE_SERVICOS_SUMMARY = [
  {
    title: "Resumo financeiro do cliente",
    url: "#resumo-financeiro-do-cliente"
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
    }, {
      title: "Pagar fatura",
      url: "#pagar-fatura"
    }]
  },
]

export const CLIENTE_SERVICOS_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar orçamento de pedido",
    url: "/vendas/novo-orcamento"
  }
}