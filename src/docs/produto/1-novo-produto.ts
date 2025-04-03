export const NOVO_PRODUTO_MARKDOWN = `
# Cadastro de Produto

O **cadastro de produtos** no sistema é essencial para manter um controle completo do seu inventário, abrangendo desde informações básicas até dados fiscais e de custos. Esta documentação guiará você através das principais seções do formulário de cadastro.

---

## Informações do Produto

Esta seção concentra os dados fundamentais para identificação do produto no sistema. Aqui são registradas as características básicas que permitem reconhecer e diferenciar cada item no estoque, incluindo nome, código identificador e status de atividade. A descrição detalhada do produto também pode ser incluída para fornecer informações complementares à equipe.

![Informações do Produto](/images/produto/01.webp)

---

## Fiscal do Produto

A parte fiscal do cadastro reúne todas as informações necessárias para a correta tributação e documentação do produto. Esta seção é crucial para a emissão de notas fiscais e cálculo automático de impostos, contendo códigos oficiais como NCM e EAN, além de especificações sobre a origem e unidade de medida para fins tributários.

![Fiscal do Produto](/images/produto/02.webp)

> **Importante:** A precisão dos dados fiscais é essencial para evitar problemas com a receita. Consulte sempre um especialista em caso de dúvidas.

---

## Custo do Produto

Nesta seção são gerenciadas todas as informações financeiras relacionadas ao produto. Ela permite registrar valores de compra, custos operacionais e margens de lucro, servindo como base para o cálculo automático de preços de venda e análise de rentabilidade. Os históricos de valor e data da última compra ajudam no acompanhamento da variação de custos.

![Custo do Produto](/images/produto/03.webp)

---

Para consultar ou editar produtos cadastrados, acesse **Estoque > Produtos** no menu principal.
`

export const CONSULTAR_PRODUTOS_SUMMARY = [
  {
    title: 'Informações do Produto',
    url: '#informações-do-produto'
  },
  {
    title: 'Fiscal do Produto',
    url: '#fiscal-do-produto'
  },
  {
    title: 'Custo do Produto',
    url: '#custo-do-produto'
  },
]

export const CONSULTAR_PRODUTOS_ACTIONS = {
  previous: {
    title: "Introdução á Produto",
    url: "/produto/introducao",

  },
  next: {
    title: "Consultar Produto",
    url: "/produto/consultar"
  }
}