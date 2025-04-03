export const CONSULTAR_CONTAS_A_PAGAR_MARKDOWN = `
# Consultar Contas a Pagar

A aba **Contas a Pagar** é crucial para a gestão e visualização do fluxo financeiro das contas a pagar no sistema. Com uma interface intuitiva, ela permite um acesso rápido e detalhado às informações relevantes.

---

## Visão Geral do Financeiro

No topo da página, você encontrará vários cards que demonstram o panorama financeiro geral de todas as contas a pagar. Esses cards fornecem uma visão consolidada, facilitando a compreensão da situação financeira atual.

![Cards financeiro geral](/images/financeiro/contas-a-pagar/consultar/01.webp)

## Tabela de Contas a Pagar

Logo abaixo, uma tabela exibe todas as contas a pagar. Cada linha da tabela inclui um ícone de olho, permitindo a visualização dos detalhes de cada conta. Isso proporciona um acesso direto às informações específicas que você precisa.

![Tabela de contas a pagar](/images/financeiro/contas-a-pagar/consultar/02.webp)

- **Exportar Relatório:** Um botão que possibilita a geração de um relatório completo com as informações das contas a pagar, ideal para análises detalhadas e documentação externa.
- **Registrar Novo Lançamento:** Direciona você para a página de cadastro, onde novos lançamentos podem ser adicionados ao sistema.

### Filtros e Pesquisa

A tabela também oferece opções de filtragem por vencimento, além da possibilidade de pesquisar pelo nome do cliente. Isso torna a busca por informações específicas mais eficiente, permitindo que você encontre rapidamente o que precisa.

![Visualização de detalhes](/images/financeiro/contas-a-pagar/consultar/03.gif)

Com essas funcionalidades, a aba de "Consultar Contas a Pagar" assegura uma gestão eficaz e organizada, facilitando a administração das contas e a tomada de decisões financeiras.
`

export const CONSULTAR_CONTAS_A_PAGAR_SUMMARY = [
  {
    title: "Visão geral do financeiro",
    url: "#visão-geral-do-financeiro"
  },
  {
    title: "Tabela de contas a pagar",
    url: "#tabela-de-contas-a-pagar",
    subLinks: [{
      title: 'Filtros e pesquisa',
      url: '#filtros-e-pesquisa'
    }]
  },
]

export const CONSULTAR_CONTAS_A_PAGAR_ACTIONS = {
  previous: {
    title: "Lançamento Manual",
    url: "/financeiro/contas-a-pagar/registrar-lancamento"
  },
  next: {
    title: "Efetuar Cobrança",
    url: "/financeiro/contas-a-receber/registrar-cobranca"
  }
}