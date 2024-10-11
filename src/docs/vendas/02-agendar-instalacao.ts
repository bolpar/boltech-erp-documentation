export const AGENDAR_INSTALACAO_MARKDOWN = `
# Agendar Instalação do Pedido

A aba **"Instalação"** é fundamental para gerenciar o processo de instalação do rastreador, permitindo que você cadastre o veículo do cliente e agende a instalação. **Esse passo é opcional para casos em que o modelo do rastreador não requer instalação**.

---

## Informando o Veículo

Nesta seção, você deve informar as informações do veículo do cliente que receberá o rastreador, preenchendo todos os campos solicitados com precisão.

![Formulário de veículo](/images/agendar-instalacao/01.webp)
> **Observação:** Ao inserir a placa do veículo no campo "Placa", o sistema automaticamente consulta o banco de dados do Detran e preenche as informações automaticamente sobre o veículo. Essa funcionalidade agiliza o processo e minimiza erros.

---

## Agendando a Instalação

Para concluir o agendamento da instalação, escolha o técnico, o tipo de serviço, o endereço, a data e o horário. Adicione o custo da instalação e, ao clicar em **"Registrar"**, o sistema criará uma **ordem de serviço** pendente para o técnico selecionado.

![Formulário de agendamento](/images/agendar-instalacao/02.webp)

> **Observação:** Para agendar uma instalação, é nescessário que o sistema possua técnicos já existentes. Para o cadastro de técnico basta navegar em **Cadastro > Técnico**

---

## Agendamentos

A tabela de agendamentos oferece uma visão clara e detalhada de todos os compromissos agendados. Os dados são organizados para facilitar o acompanhamento do status de cada instalação, incluindo: **placa do veículo**, **modelo do veículo**, **nome do técnico**, **data e hora da instalação**.

![Tabela de agendamentos](/images/agendar-instalacao/03.webp)

---

## Funcionalidades Adicionais
### Edição de Agendamentos
Caso seja necessário alterar algum detalhe de um agendamento, basta clicar no **ícone de lápis** na tabela para editar as informações de forma rápida e precisa.

### Visualização de Detalhes do Agendamento
Para visualizar os detalhes completos de um agendamento, clique no **ícone de olho**. Esta ação abrirá uma visão detalhada do agendamento, fornecendo todas as informações relevantes em um só lugar.

### Notificação via WhatsApp
Para proporcionar uma experiência mais integrada e eficiente, você pode enviar os detalhes do agendamento diretamente para o cliente via WhatsApp. Use o botão dedicado com o ícone da plataforma para compartilhar as informações de forma imediata.
`

export const AGENDAR_INSTALACAO_SUMMARY = [
  {
    title: "Informando o veículo",
    url: "#informando-o-veículo"
  },
  {
    title: "Agendando a instalação",
    url: "#agendando-a-instalação"
  },
  {
    title: "Agendamentos",
    url: "#agendamentos"
  },
  {
    title: "Funcionalidades adicionais",
    url: "#funcionalidades-adicionais"
  },
]

export const AGENDAR_INSTALACAO_ACTIONS = {
  previous: {
    title: "Criar orçamento de pedido",
    url: "/vendas/novo-orcamento"
  },
  next: {
    title: "Iniciar separação do pedido",
    url: "/vendas/iniciar-separacao"
  }
}