export const CONSULTAR_PEDIDOS_MARKDOWN = `
# Consultar Pedidos de Venda

A página de **consulta de pedidos de venda** é o ponto de partida para gerenciar as vendas no sistema. Nela, você encontra uma lista organizada de pedidos, permitindo uma visão clara e rápida das informações essenciais.

---

## Tabela de Pedidos

A tabela exibe todos os pedidos de venda com detalhes como *número do pedido*, *cliente*, *CPF/CNPJ*, *situação* e *data de criação*. Para agilizar a localização, a página oferece uma barra de pesquisa e filtros que refinam os resultados por data e situação, facilitando a gestão dos pedidos.

![Tabela de pedidos](/images/vendas/consultar-pedidos/01.webp)

---

## Visualização e Edição de Pedidos

### Visualizando o Pedido de Venda

Ao clicar em <img src="/images/eye.png" alt="ícone de olho" style="width: 36px; display: inline; margin: 0; vertical-align: middle;">, um painel se abre com todos os detalhes do pedido, incluindo dados da instalação e informações do equipamento. Esse painel foi projetado para fornecer uma visão completa e organizada de cada pedido.

![Painel de visualização do pedido mockado](/images/vendas/consultar-pedidos/02.gif)

### Editando o Pedido de Venda

Para editar um pedido, basta clicar em <img src="/images/pencil-line.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;">, que direciona diretamente para o fluxo de vendas com os detalhes do pedido já carregados, facilitando qualquer ajuste necessário.
`

export const CONSULTAR_PEDIDOS_SUMMARY = [
  {
    title: "Tabela de Pedidos",
    url: "#tabela-de-pedidos"
  },
  {
    title: "Visualização e edição",
    url: "#primeiros-passos-no-sistema",
    subLinks: [{
      title: "Visualizando o pedido de venda",
      url: "#visualizando-o-pedido-de-venda"
    }, {
      title: "Editando o pedido de venda",
      url: "#editando-o-pedido-de-venda"
    }]
  },
]

export const CONSULTAR_PEDIDOS_ACTIONS = {
  previous: {
    title: "Testar equipamento",
    url: "/vendas/testar-equipamento"
  },
  next: {
    title: "Introdução ao CRM",
    url: ""
  }
}