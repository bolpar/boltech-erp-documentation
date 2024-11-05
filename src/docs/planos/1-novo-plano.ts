export const NOVO_PLANO_MARKDOWN = `
# Cadastro de Novo Plano

O cadastro de um novo plano é realizado na aba Cadastro de Plano, onde você poderá preencher todos os campos essenciais para configurar e definir o plano conforme as especificidades do cliente. Essa configuração possibilita o registro de planos padrão ou até mesmo customizados, atendendo a diferentes necessidades.

---

## Cadastro de Plano

Nesta primeira seção, preencha as informações principais do plano, como nome, vigência e detalhes de contrato. Aqui, você também encontra a opção de adicionar mais valores, permitindo a criação de planos customizados com condições especiais. Para isso, clique no botão "Adicionar mais valor", localizado na seção de valores do plano.

![Campo de cadastro de plano](/images/planos/01.webp)

---

## Valores do Plano

A seção de valores permite definir aspectos financeiros e formas de pagamento, proporcionando flexibilidade para ajustar o plano às demandas do cliente.

![Campo de cadastro de valor](/images/planos/02.webp)

>**Importante**: Preencher corretamente essas informações é crucial para garantir que os planos estejam de acordo com as necessidades e regras de negócio definidas pela empresa.
`

export const NOVO_PLANO_SUMMARY = [
  {
    title: "Cadastro de plano",
    url: "#cadastro-de-plano"
  },
  {
    title: "Valores do plano",
    url: "#valores-do-plano"
  },
]

export const NOVO_PLANO_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}