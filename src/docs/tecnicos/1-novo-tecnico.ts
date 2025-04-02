export const NOVO_TECNICO_MARKDOWN = `
# Registrar um técnico

A aba **registrar um técnico** é uma etapa importante para garantir que todas as informações essenciais sobre o profissional estejam devidamente registradas no sistema. Nesta seção, você encontrará desde dados básicos até detalhes de contato, endereços e informações de pagamento.

---

## Informações Básicas

Nesta seção, você deve preencher os dados essenciais do técnico, como *nome*, *documento* e *data de nascimento*. Esses dados são fundamentais para identificar o técnico dentro do sistema.

![Seção informações básicas](/images/tecnicos/novo-tecnico/01.webp)

- **Inscrição Estadual**: para empresas que vendem produtos (IE) (Opcional)
- **Inscrição Municipal**: para prestadoras de serviços (IM) (Opcional)

>**Observação**: Em caso de isenção ou cadastro de cliente com CPF, inscrição estadual e municipal são opcionais no cadastro do cliente.

---

## Endereços do Técnico

Aqui, você pode registrar múltiplos endereços do técnico, garantindo que todas as localizações relevantes estejam cadastradas. Para adicionar mais endereços, clique no botão **Adicionar mais Endereço**.

![Seção endereços](/images/tecnicos/novo-tecnico/02.webp)

---

## Contatos do Técnico

Nesta seção, você poderá registrar os contatos do técnico. É possível cadastrar múltiplos contatos para assegurar que todas as informações de comunicação estejam disponíveis. Clique no botão **Adicionar mais Contato** para incluir novos contatos conforme necessário.

![Seção contatos](/images/tecnicos/novo-tecnico/03.webp)

- **Senha de Acesso**: É a senha que o técnico utilizará para autenticar-se na plataforma **Técnico Boltech**.

---

## Informações de Pagamento

Na última seção, insira os dados financeiros do técnico, incluindo informações de conta bancária, chave PIX e a data de fechamento para pagamentos. Esses dados facilitam a gestão financeira no sistema.

![Seção informações de pagamento](/images/tecnicos/novo-tecnico/04.webp)
`

export const NOVO_TECNICO_SUMMARY = [
  {
    title: "Introdução ao fluxo de clientes",
    url: "#introdução-ao-fluxo-de-clientes"
  },
  {
    title: "O que você irá aprender",
    url: "#o-que-você-irá-aprender"
  },
]

export const NOVO_TECNICO_ACTIONS = {
  previous: {
    title: "Introdução á Técnicos",
    url: "/tecnicos/introducao"
  },
  next: {
    title: "Registrar Tipo de Serviço",
    url: "/tecnicos/novo-tipo-servico"
  }
}