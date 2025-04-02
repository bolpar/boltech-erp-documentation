export const PRODUTO_INTRODUCAO_MARKDOWN = `
# Introdução ao Fluxo de Produtos

O Fluxo de Produtos no Boltech ERP contempla todas as operações essenciais para registro e consulta de itens do inventário. Este módulo foi projetado para oferecer uma gestão simplificada e eficiente dos seus produtos, desde o cadastro inicial até a consulta diária.

---

## O que você irá encontrar

Nesta seção, você terá acesso às seguintes funcionalidades principais:

- **Listagem de Produtos**: Visualize todos os itens cadastrados em uma tabela organizada, com opções de filtro e busca para localização ágil de qualquer produto.
- **Cadastro de Produto**: Registre novos itens no sistema com todas as informações necessárias, incluindo dados básicos, informações fiscais e valores comerciais.

>**Atenção**: Para garantir a integridade dos dados e o funcionamento correto do sistema, todos os campos marcados como obrigatórios devem ser preenchidos durante o cadastro. Mantenha as informações sempre atualizadas para evitar discrepâncias nos relatórios e documentos fiscais.

Para acessar estas funcionalidades, navegue até **Estoque > Produtos** no menu principal do sistema.
`

export const PRODUTO_INTRODUCAO_SUMMARY = [
  {
    title: "Introdução ao fluxo de produtos",
    url: "#introdução-ao-fluxo-de-produtos"
  },
  {
    title: "O que você irá encontrar",
    url: "#o-que-você-irá-encontrar"
  },
]

export const PRODUTO_INTRODUCAO_ACTIONS = {
  previous: {
    title: "Consultar Chip",
    url: "/chip/consultar",

  },
  next: {
    title: "Registrar Produto",
    url: "/produto/novo-produto"
  }
}