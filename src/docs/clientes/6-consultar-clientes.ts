export const CONSULTAR_CLIENTES_MARKDOWN = `
# Consultar Cliente

A página de consulta de clientes é fundamental para gerenciar e visualizar todas as informações registradas sobre os clientes no sistema. Com uma interface clara e organizada, ela permite uma busca eficiente e uma análise detalhada dos dados de cada cliente.

---

## Resumo Geral dos Clientes

No topo da página, uma série de **cards** apresenta um panorama geral dos dados mais importantes relacionados aos clientes cadastrados no sistema. Esses cards oferecem uma visão rápida e precisa dos indicadores, facilitando a tomada de decisões.

![Cards gerais dos clientes](/images/clientes/consultar-clientes/01.webp)

---

## Tabela de Clientes

Logo abaixo dos cards, está localizada a **tabela de clientes**, onde é possível acessar informações detalhadas. Nessa seção, você conta com ferramentas de pesquisa e filtros que permitem refinar a busca por clientes, de acordo com data, situação e origem.

![Tabela dos clientes](/images/clientes/consultar-clientes/02.webp)

Além disso, você tem as seguintes opções:

- **Exportar Relatório**: Gera um relatório completo contendo as informações dos clientes, ideal para análises detalhadas e documentação externa.
- **Registrar Novo Cliente**: Direciona para a página de registro, onde um novo cliente pode ser adicionado ao sistema.

---

## Ações Disponíveis

Dentro da tabela de clientes, é possível realizar ações específicas para cada cliente listado:

### Visualização do Cliente

Ao clicar no **ícone de olho** ao lado de um cliente, um painel detalhado se abrirá, exibindo todas as informações disponíveis sobre o cliente selecionado. Esse painel foi projetado para oferecer uma visão abrangente e estruturada, facilitando o acesso a todos os dados importantes.

![Painel dos dados do cliente](/images/clientes/consultar-clientes/03.gif)

Com essas funcionalidades, a página de consulta de clientes garante uma gestão eficaz e organizada, proporcionando facilidade na busca, visualização e administração das informações cadastradas.

`

export const CONSULTAR_CLIENTES_SUMMARY = [
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

export const CONSULTAR_CLIENTES_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar orçamento de pedido",
    url: "/vendas/novo-orcamento"
  }
}