export const NOVO_ORCAMENTO_MARKDOWN = `
# Crar orçamento de pedido

O **orçamento de pedido** é o primeiro passo do fluxo de uma venda. Esta etapa inicia o processo de venda, onde são coletados os dados iniciais do cliente, seleção do plano, tipo do equipamentos e quantidade.

---

## Informações Básicas
Nesta seção, você registra ou busca o perfil do cliente, preenchendo dados fundamentais como nome, e-mail, telefone e tipo de cliente (pessoa física ou jurídica).

![Fieldset Informações Básicas](/images/novo-orcamento/01.webp)

---

## Endereço
Confirme ou cadastre o endereço do cliente, garantindo que todos os detalhes (rua, número, bairro, cidade, UF e CEP) estejam corretos.

![Fieldset Endereço](/images/novo-orcamento/02.webp)
> **Observação:** Ao informar "CEP", a API **Via CEP** irá preencher automaticamente todos os campos do endereço, proporcionando comodidade e maior precisão de dados.
---

## Equipamentos
Selecione o tipo de equipamento a ser vendido e informe a quantidade necessária. Lembre-se de que apenas um tipo de equipamento pode ser escolhido por pedido.

![Fieldset Equipamentos](/images/novo-orcamento/03.webp)

---

## Planos
Escolha o plano de serviço mais adequado para o cliente, apresentando as opções disponíveis e seus benefícios.

![Fieldset Planos](/images/novo-orcamento/04.webp)

---

### Valores Adicionais
Aplique ajustes financeiros como descontos ou acréscimos e registre observações relevantes sobre a negociação.

![Fieldset Valores Adicionais](/images/novo-orcamento/05.webp)
> **Observação:** Esta seção é opcional.

---

Esse fluxo assegura que todas as informações relevantes sejam coletadas de forma clara e eficiente, facilitando o processo de venda.
`

export const NOVO_ORCAMENTO_SUMMARY = [
  {
    title: "Visão geral",
    url: "#visão-geral"
  },
  {
    title: "Primeiros passos no sistema",
    url: "#primeiros-passos-no-sistema"
  },
  {
    title: "Configurações iniciais",
    url: "#configurações-iniciais"
  },
  {
    title: "Conclusão",
    url: "#conclusão"
  },
  {
    title: "Considerações finais",
    url: "#considerações-finais"
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