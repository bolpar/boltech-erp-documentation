export const INTRODUCAO_FORNECEDORES_MARKDOWN = `
# Introdução ao Fluxo de Fornecedores

O **Fluxo de Fornecedores** no Boltech ERP abrange todas as etapas de gerenciamento relacionadas aos fornecedores, desde o cadastro inicial até a gestão contínua de suas informações e finanças. Ao final deste fluxo, você terá uma compreensão completa de como gerenciar os fornecedores de maneira eficaz dentro do sistema.

---

## O que você irá aprender

Ao final da leitura da seção Fornecedores, você estará preparado para cadastrar novos fornecedores, visualizar suas informações e gerenciar suas finanças com confiança. Confira abaixo todas as etapas que você irá compreender nesta seção:

1. **Fornecedores**: Nesta aba, você terá acesso a todos os fornecedores cadastrados no sistema, exibidos em uma tabela organizada. Aqui, você poderá buscar, filtrar e selecionar fornecedores específicos para visualizar detalhes ou iniciar novos processos.
2. **Dados**: Esta aba é utilizada para registrar novos fornecedores no sistema, onde você pode inserir todas as informações necessárias para realizar o cadastro completo.
3. **Financeiro**: Esta seção apresenta todos os dados financeiros relacionados ao fornecedor selecionado, como histórico de pagamentos, faturas pendentes, condições de pagamento e detalhes contratuais. A aba "Financeiro" só se torna ativa após a seleção de um fornecedor na aba "Fornecedores".
>**Importante**: Cada uma dessas etapas é essencial para garantir que todos os detalhes do fornecedor sejam registrados e geridos de maneira organizada.

---

## Cadastro, Visualização e Edição

### Cadastrando um Novo Fornecedor

Ao iniciar o cadastro de um novo fornecedor, apenas as abas **Fornecedores** e **Dados** estarão habilitadas. Nesse estágio, não há ícone de status visível, uma vez que o fornecedor ainda não foi registrado no sistema.

![Menu de páginas para cadastro](/images/fornecedores/01.webp)

### Visualizando e Editando Fornecedor

Para editar um fornecedor, clique no **ícone de lápis** ao lado do fornecedor desejado na tabela da aba **Fornecedores**. Isso *direciona o fluxo para o fornecedor selecionado*, exibindo as abas **Dados** e **Financeiro** para que você possa visualizar e editar suas informações.

![Menu de páginas para visualização](/images/fornecedores/02.webp)
`

export const INTRODUCAO_FORNECEDORES_SUMMARY = [
  {
    title: "O que você irá aprender",
    url: "#o-que-você-irá-aprender"
  },
  {
    title: "Cadastro, visualização e edição",
    url: "#cadastro,-visualização-e-edição",
    subLinks: [{
      title: "Cadastrando um novo fornecedor",
      url: "#cadastrando-um-novo-fornecedor"
    },
    {
      title: "Visualizando e editando fornecedor",
      url: "#visualizando-e-editando-fornecedor"
    }]
  },
]

export const INTRODUCAO_FORNECEDORES_ACTIONS = {
  previous: {
    title: "Consultar Clientes",
    url: "/clientes/consultar-clientes"
  },
  next: {
    title: "Registrar Fornecedor",
    url: "/fornecedores/novo-fornecedor"
  }
}