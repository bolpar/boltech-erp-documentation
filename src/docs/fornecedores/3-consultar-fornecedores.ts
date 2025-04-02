export const CONSULTAR_FORNECEDORES_MARKDOWN = `
# Consultar Fornecedor

A página de consulta de fornecedores é essencial para gerenciar e acompanhar todas as informações registradas sobre fornecedores no sistema. Com uma interface intuitiva, ela permite a localização e análise detalhada dos dados de cada fornecedor.

---

## Resumo Geral dos Fornecedores

No topo da página, diversos **cards** apresentam um panorama geral dos fornecedores registrados no sistema. Esses cards oferecem uma visão clara dos dados globais, ajudando na análise e gerenciamento dos fornecedores cadastrados.

![Cards de dados dos fornecedores](/images/fornecedores/consultar-fornecedores/01.webp)
---

## Tabela de Fornecedores

Logo abaixo dos cards, você encontrará uma **tabela de fornecedores**. Nessa seção, há ferramentas de pesquisa e filtros que permitem localizar rapidamente um fornecedor específico. A tabela exibe informações essenciais para facilitar a identificação e consulta.

![Tabela dos fornecedores](/images/fornecedores/consultar-fornecedores/02.webp)

Além disso, você tem a opção de:

- **Exportar Relatório**: Gera um relatório detalhado com os dados dos fornecedores, permitindo a análise externa e a documentação.
- **Registrar Novo Fornecedor**: Inicia o processo de cadastro de um novo fornecedor diretamente nesta página.

---

## Ações Disponíveis

Dentro da tabela de fornecedores, você pode realizar ações específicas para cada fornecedor listado:

### Visualização do Fornecedor

Ao clicar no **ícone de olho**, um painel se abre com todos os detalhes do pedido, incluindo dados da instalação e informações do equipamento. Esse painel foi projetado para fornecer uma visão completa e organizada de cada pedido.

![](/images/fornecedores/consultar-fornecedores/03.gif)

### Editando o Fornecedor

Para editar um pedido, basta selecionar o ícone de edição, que direciona diretamente para o fluxo de vendas com os detalhes do pedido já carregados, facilitando qualquer ajuste necessário.
`

export const CONSULTAR_FORNECEDORES_SUMMARY = [
  {
    title: "Resumo geral dos fornecedores",
    url: "#resumo-geral-dos-fornecedores"
  },
  {
    title: "Tabela de fornecedores",
    url: "#tabela-de-fornecedores",
  },
  {
    title: "Ações disponíveis",
    url: "#ações-dosponíveis",
    subLinks: [
      {
        title: "Visualização do fornecedor",
        url: "#visualização-do-fornecedor"
      },
      {
        title: "Editando o fornecedor",
        url: "#editando-o-fornecedor"
      }
    ]
  }
]

export const CONSULTAR_FORNECEDORES_ACTIONS = {
  previous: {
    title: "Financeiro do Fornecedor",
    url: "/fornecedores/financeiro"
  },
  next: {
    title: "Introdução á Técnicos",
    url: "/tecnicos/introducao"
  }
}