export const INICIAR_SEPARACAO_MARKDOWN = `
 # Iniciar separação do pedido

O fluxo de vendas do sistema Boltech consiste em diversas etapas que garantem que todas as informações necessárias para o devido controle sejam registradas no sistema.

## Fluxo de Venda

O processo de venda segue os seguintes passos:

1. Cadastro do cliente
2. Definição do tipo do aparelho e quantidade
3. Seleção do plano
4. Aplicação de descontos ou acréscimos
5. Cadastro do veículo
6. Agendamento da instalação
7. Seleção do equipamento para venda
8. Checklist da expedição
9. Recebimento dos valores
10. Envio de contrato digital para assinatura
11. Teste do aparelho durante a instalação no veículo
12. Coleta de fotos e dados da instalação
13. Conclusão do pedido

É necessário que todos esses passos sejam concluídos para que o sistema considere a venda como finalizada.

## Cadastro do Cliente

O primeiro passo é garantir que o cliente esteja cadastrado no sistema. O cadastro pode ser realizado das seguintes maneiras:

- **Manual:** Através do menu "Cadastro > Cliente > Registrar novo cliente".
- **Cadastro automático:** Via link de cadastro enviado para o cliente, onde ele preenche um formulário com os dados necessários.
- **Diretamente no fluxo de vendas:** Ao preencher os campos na aba "Dados" e clicar em "salvar", o cliente é automaticamente cadastrado.
- **Lead captado via Landing Page.**

Para cadastros realizados pelo link ou como Lead, o pedido aparecerá automaticamente na lista do fluxo de vendas, permitindo iniciar ou continuar o processo.

## Tipo do Aparelho e Quantidade

Na aba "Dados" dentro do fluxo de vendas, o usuário deve selecionar o tipo de equipamento e a quantidade desejada. Atualmente, o sistema permite apenas **um tipo de equipamento por pedido de venda**.
`

export const INICIAR_SEPARACAO_SUMMARY = [
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

export const INICIAR_SEPARACAO_ACTIONS = {
  previous: {
    title: "Agendar instalação do pedido",
    url: "/vendas/agendar-instalacao"
  },
  next: {
    title: "Gerar recebimento do pedido",
    url: "/vendas/gerar-recebimento"
  }
}