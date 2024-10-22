export const CONSULTAR_TECNICOS_MARKDOWN = `
# Consultar Técnico

A página de consulta de técnicos é essencial para gerenciar e visualizar todas as informações registradas sobre os técnicos no sistema. Com uma interface organizada e intuitiva, ela permite uma navegação eficiente pelos dados, proporcionando uma análise detalhada e rápida acesso às informações de cada técnico.

---

## Tabela de Técnicos

Logo abaixo dos cards, está localizada a tabela de técnicos, onde é possível acessar informações detalhadas. Nessa seção, você conta com o campo de pesquisa e filtros que permitem refinar a busca por técnicos, de acordo com o tipo de serviço prestado.

![Tabela de técnicos](/images/tecnicos/consultar-tecnicos/01.webp)

- **Exportar Relatório**: Gera um relatório completo contendo as informações dos técnicos, ideal para análises detalhadas e documentação.
- **Registrar Novo Técnico**: Direciona para a página de cadastro, onde um novo técnico pode ser adicionado ao sistema.

---

## Ações Disponíveis

Dentro da tabela de clientes, é possível realizar ações específicas para cada cliente listado:

### Visualização do Cliente

Ao clicar no **ícone de olho** ao lado de um técnico, um painel detalhado se abrirá, exibindo todas as informações disponíveis sobre o técnico selecionado. Esse painel foi projetado para oferecer uma visão abrangente e estruturada, facilitando o acesso a todos os dados importantes.

![Painel de técnico detalhado](/images/tecnicos/consultar-tecnicos/02.gif)


---

Com essas funcionalidades, a página de consulta de técnicos garante uma gestão eficiente e organizada, facilitando a busca, visualização e administração das informações cadastradas no sistema.
`

export const CONSULTAR_TECNICOS_SUMMARY = [
  {
    title: "Tabela de técnicos",
    url: "#tabela-de-técnicos"
  },
  {
    title: "Ações disponíveis",
    url: "#ações-disponíveis",
    subLinks: [{
      title: "Visualização do cliente",
      url: "#visualização-do-cliente"
    }]
  },
]

export const CONSULTAR_TECNICOS_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}