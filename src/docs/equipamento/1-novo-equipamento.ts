export const NOVO_EQUIPAMENTO_MARKDOWN = `
# Registrar Equipamento

O **registro de equipamento** é uma etapa fundamental para garantir que todas as informações essenciais sobre os equipamentos estejam registradas no sistema. Nesta seção, você encontrará desde dados básicos até detalhes sobre o veículo vinculado e as informações do chip.

---

## Informações do Equipamento

Nesta seção, preencha os dados básicos do equipamento. Esses campos fornecem uma identificação inicial do registro do equipamento.

![Informações do equipamento](/images/equipamento/01.webp)

---

## Informações do Veículo

Nesta seção, vincule o equipamento a um veículo registrado no sistema, garantindo a associação correta entre ambos.

![Informações do veículo](/images/equipamento/02.webp)

>**Observação**: Certifique-se de que o veículo desejado já esteja cadastrado no sistema. Para cadastrar um veículo navegue em **Cadastro > Veículos**.

---

## Informações do Chip

Vincule um chip já registrado no sistema ao equipamento que está sendo cadastrado.

![Informações do chip](/images/equipamento/03.webp)

>**Importante**: Certifique-se de que o chip desejado já esteja cadastrado no sistema. Para cadastrar um chip navegue em **Cadastro > Chip**.

---

## Configurações e Detalhes da Instalação

Esta aba permite que você registre as configurações específicas e os detalhes da instalação do chip. Informações como localização da instalação e instruções específicas devem ser preenchidas para garantir que a instalação seja realizada corretamente.

![Informações de configurações e detalhes da instalação](/images/equipamento/04.webp)

---

Ao completar a seção de cadastro de equipamento, você terá uma visão abrangente e organizada dos dados do equipamento, otimizando a gestão e garantindo que todas as informações estejam prontamente disponíveis para a equipe.
`

export const NOVO_EQUIPAMENTO_SUMMARY = [
  {
    title: "Informações do equipamento",
    url: "#informações-do-equipamento"
  },
  {
    title: "Informações do veículo",
    url: "#informações-do-veículo"
  },
  {
    title: "Informações do chip",
    url: "#informações-do-chip"
  },
  {
    title: "Configurações e detalhes da instalação",
    url: "#configurações-e-detalhes-da-instalação"
  },
]

export const NOVO_EQUIPAMENTO_ACTIONS = {
  previous: {
    title: "Introdução á Equipamentos",
    url: "/equipamento/introducao"
  },
  next: {
    title: "Cadastrar equipamentos em massa",
    url: "/equipamento/novo-equipamento-multiplos"
  }
}