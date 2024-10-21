export const NOVO_ORCAMENTO_MARKDOWN = `
# Preencher dados e selecionar plano

A página **Dados e Plano** é o primeiro passo do fluxo de uma venda. Esta etapa inicia o processo de venda, onde são coletados os dados iniciais do cliente, seleção do plano, tipo do equipamentos e quantidade.

---

## Informações Básicas
Nesta seção, você **registra ou busca o perfil do cliente**, preenchendo dados fundamentais. É possível preencher os dados de um cliente já existente no sistema, ou, caso necessário, cadastrar um novo lead, iniciando assim um novo contato no processo de vendas.

![Fieldset Informações Básicas](/images/novo-orcamento/01.webp)
- **Pesquisar cliente existente**: Campo para buscar um cliente já cadastrado. Se preenchido, os dados do cliente são automaticamente preenchidos.
- **Publicidade**: Campo para indicar a origem do contato com o cliente.

>**Terminologia**: Um lead é um potencial cliente que demonstrou interesse em um produto ou serviço.
---

## Endereço
Certifique-se de confirmar ou cadastrar o endereço do cliente com as informações mais precisas possíveis.

![Fieldset Endereço](/images/novo-orcamento/02.webp)
> **Observação:** Ao informar "CEP", a API [Via CEP](https://viacep.com.br/) irá preencher automaticamente todos os campos do endereço, proporcionando comodidade e maior precisão de dados.
---

## Equipamentos
Selecione o tipo de equipamento a ser vendido e informe a quantidade necessária. Lembre-se de que apenas um tipo de equipamento pode ser escolhido por pedido.

![Fieldset Equipamentos](/images/novo-orcamento/03.webp)

---

## Planos
Escolha o plano de serviço mais adequado para o cliente, apresentando as opções disponíveis e seus benefícios.

![Fieldset Planos](/images/novo-orcamento/04.webp)

---

## Valores Adicionais
Aplique ajustes financeiros como descontos ou acréscimos e registre observações relevantes sobre a negociação.

![Fieldset Valores Adicionais](/images/novo-orcamento/05.webp)
> **Observação:** Esta seção é opcional.

---

Ao seguir os passos acima, você terá um orçamento concluído em nosso sistema. Isso garante que todas as informações do cliente e detalhes da venda estejam corretamente registrados, facilitando o acompanhamento e a gestão entorno da venda.

---

## Funcionalidades Adicionais
### Edição de Orçamento de Venda

Encontre o orçamento desejado na tabela da página **Vendas** no fluxo de vendas. Ao localizar o pedido, clique no **ícone de lápis** para editar rapidamente todas as informações do orçamento, ajustando conforme necessário.
`

export const NOVO_ORCAMENTO_SUMMARY = [
  {
    title: "Informações básicas",
    url: "#informações-básicas"
  },
  {
    title: "Endereço",
    url: "#endereço"
  },
  {
    title: "Equipamentos",
    url: "#equipamentos"
  },
  {
    title: "Planos",
    url: "#planos"
  },
  {
    title: "Valores adicionais",
    url: "#valores-adicionais"
  },
  {
    title: "Funcionalidades adicionais",
    url: "#funcionalidades-adicionais",
    subLinks: [
      {
        title: "Edição de orçamento de venda",
        url: "#edição-de-orçamento-de-venda"
      }
    ]
  },
]

export const NOVO_ORCAMENTO_ACTIONS = {
  previous: {
    title: "Introdução ao fluxo de vendas",
    url: "/vendas/introducao"
  },
  next: {
    title: "Agendar instalação do pedido",
    url: "/vendas/agendar-instalacao"
  }
}