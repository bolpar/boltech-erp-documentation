export const INTRODUCAO_EQUIPAMENTO_MARKDOWN = `
# Introdução ao Fluxo de Equipamentos

O Fluxo de Equipamentos no Boltech ERP abrange todas as etapas necessárias para gerenciar e registrar os equipamentos de forma eficiente. Desde a visualização dos equipamentos cadastrados até o registro de novos, este fluxo permite uma gestão clara e organizada, essencial para o controle e acompanhamento de todos os equipamentos no sistema.

---

## O que você irá aprender

Ao final desta seção, você estará apto a gerenciar os equipamentos com eficiência, seguindo as etapas abaixo:

- **Equipamentos**: Nesta aba, você encontrará uma tabela com todos os equipamentos registrados no sistema. A tabela permite procurar por um equipamento específico, facilitando a busca e a gestão dos itens cadastrados.
- **Cadastro**: Nesta aba, você preencherá todas as informações necessárias para registrar um novo equipamento, como nome, tipo, modelo, e detalhes do chip. É também neste momento que você atrelará um veículo, chip e detalhes da instalação ao chip cadastrado, garantindo que o equipamento esteja corretamente vinculado ao sistema.
- **Cadastro em Massa**: Se você precisar cadastrar múltiplos equipamentos de uma vez, a aba Cadastro em Massa permite o envio de um arquivo PDF em formato de tabela, facilitando o processo de registro em larga escala.

>**Importante**: A compreensão e a utilização correta dessas etapas são essenciais para assegurar uma gestão de equipamentos eficaz, garantindo que todos os dados sejam registrados de forma precisa e facilmente acessíveis dentro do Boltech ERP.
`

export const INTRODUCAO_EQUIPAMENTO_SUMMARY = [
  {
    title: "Introdução ao fluxo de equipamento",
    url: "#introdução-ao-fluxo-de-equipamento"
  },
  {
    title: "O que você irá aprender",
    url: "#o-que-você-irá-aprender"
  },
]

export const INTRODUCAO_EQUIPAMENTO_ACTIONS = {
  previous: {
    title: "Consultar Planos",
    url: "/planos/consultar"
  },
  next: {
    title: "Registrar Equipamento",
    url: "/equipamento/novo-equipamento"
  }
}