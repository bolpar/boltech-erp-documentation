export const NOVO_EQUIPAMENTO_MARKDOWN = `
# Registrar Equipamento

O cadastro de equipamento é uma etapa fundamental para garantir que todas as informações essenciais sobre os equipamentos estejam registradas no sistema. Nesta seção, você encontrará desde dados básicos até detalhes sobre o veículo vinculado e as informações do chip.

---

## Informações do Equipamento

Esta seção é destinada ao preenchimento das informações básicas do equipamento, como nome, tipo, modelo e outros campos valiosos. Esses dados fornecem uma visão geral inicial e são parte fundamental do cadastro completo.

![Informações do equipamento](/images/equipamento/01.webp)

- **Modelo**: Especifique o modelo do equipamento (Obrigatório).
- **Número de Série**: Insira o número de série para identificar o equipamento (Obrigatório).
- **Observação**: O preenchimento correto das informações do equipamento é crucial para o controle e gestão eficaz.

---

## Informações do Veículo

Nesta seção, você vinculará o equipamento a um veículo específico. Essa associação é importante para assegurar que o equipamento esteja corretamente relacionado ao transporte ou uso adequado.

![Informações do veículo](/images/equipamento/02.webp)

>**Observação**: Certifique-se de que o veículo desejado já esteja cadastrado no sistema para facilitar a vinculação.

---

## Informações do Chip

Aqui, você poderá vincular um chip ao seu equipamento. Essa etapa é fundamental para o funcionamento adequado do dispositivo e para garantir que as informações estejam interconectadas.

![Informações do chip](/images/equipamento/03.webp)


- **Número do Chip**: Insira o número de identificação do chip (Obrigatório).
- **Operadora**: Selecione a operadora do chip vinculado.

---

## Configurações e Detalhes da Instalação

Esta aba permite que você registre as configurações específicas e os detalhes da instalação do chip. Informações como localização da instalação e instruções específicas devem ser preenchidas para garantir que a instalação seja realizada corretamente.

![Informações de configurações e detalhes da instalação](/images/equipamento/04.webp)

>**Observação**: Detalhes precisos sobre a instalação podem ajudar a evitar problemas futuros e a otimizar a utilização do equipamento.

---

Ao completar a seção de cadastro de equipamento, você terá uma visão abrangente e organizada dos dados do equipamento, otimizando a gestão e garantindo que todas as informações estejam prontamente disponíveis para a equipe.

---

## Funcionalidades adicionais
### Edição de Equipamento

Na tabela da página anterior intitulada Equipamentos, localize o equipamento desejado e clique no ícone de lápis para editar as informações do cadastro. Atualize rapidamente os dados conforme necessário, garantindo que as informações estejam sempre corretas e atualizadas.
`

export const NOVO_EQUIPAMENTO_SUMMARY = [
  {
    title: "Introdução ao fluxo de clientes",
    url: "#introdução-ao-fluxo-de-clientes"
  },
  {
    title: "O que você irá aprender",
    url: "#o-que-você-irá-aprender"
  },
]

export const NOVO_EQUIPAMENTO_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}