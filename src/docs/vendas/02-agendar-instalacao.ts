export const AGENDAR_INSTALACAO_MARKDOWN = `
# Agendar Instalação do Pedido

A aba **"Agendar Instalação do Pedido"** é fundamental para gerenciar o processo de instalação de rastreadores, permitindo que você cadastre o veículo e agende a instalação de forma eficiente e organizada. **Esse passo é opcional para casos em que o modelo do rastreador não requer instalação**.

---

## Informando o Veículo

Nesta seção, você deve cadastrar o veículo que receberá o rastreador, preenchendo todos os campos solicitados com precisão.

![Formulário de veículo](/images/agendar-instalacao/01.jpg)
> **Observação:** Ao inserir a placa do veículo no campo específico, o sistema automaticamente consulta a API do Detran e preenche as informações disponíveis do veículo. Essa funcionalidade agiliza o processo e minimiza erros.

## Agendando a Instalação

Para seguir com o agendamento da instalação, siga os passos a seguir para assegurar que tudo seja organizado de maneira eficiente:

![Formulário de agendamento](/images/agendar-instalacao/02.jpg)
- **Seleção do Técnico**: Escolha o técnico responsável pela instalação do equipamento.
- **Definição do Tipo de Serviço**: Escolha o tipo de serviço a ser executado, conforme a necessidade do cliente.
- **Local de Instalação**: Defina onde a instalação será realizada, podendo ser no ponto de atendimento do técnico ou em um endereço fornecido pelo cliente, caso uma visita técnica seja necessária.
- **Agendamento de Data e Hora**: Selecione a data e o horário mais adequados para realizar a instalação.
- **Valores Adicionais**: Adicione quaisquer custos extras que possam estar envolvidos, como taxas de deslocamento ou encargos adicionais relacionados ao serviço.

> **Observação:** Para agendar uma instalação, é nescessário que o sistema possua técnicos já existentes. Para cadastro de técnico basta navegar em **"Cadastro > Técnico"**

Após preencher todos os campos necessários, clique em **Registrar**. O sistema irá gerar automaticamente o agendamento e criar uma **Ordem de Serviço** pendente para o técnico selecionado, garantindo que todas as etapas estejam devidamente registradas.

## Agendamentos

A tabela de agendamentos oferece uma visão clara e detalhada de todos os compromissos agendados. Os dados são organizados para facilitar o acompanhamento do status de cada instalação, incluindo: **Placa do Veículo**, **Modelo do Veículo**, **Nome do Técnico**, **Data e Hora da Instalação**.

![Tabela de agendamentos](/images/agendar-instalacao/03.jpg)

---

## Funcionalidades Adicionais
- **Edição de Agendamentos:** Caso seja necessário alterar algum detalhe de um agendamento, basta selecionar o item na tabela para editar as informações de forma rápida e precisa.
- **Notificação via WhatsApp:** Para proporcionar uma experiência mais integrada e eficiente, você pode enviar os detalhes do agendamento diretamente para o cliente via WhatsApp. Use o botão dedicado com o ícone da plataforma para compartilhar as informações de forma imediata.
`

export const AGENDAR_INSTALACAO_SUMMARY = [
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