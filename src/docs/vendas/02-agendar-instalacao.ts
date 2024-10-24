export const AGENDAR_INSTALACAO_MARKDOWN = `
# Agendar Instalação do Pedido

A aba **Instalação** é fundamental para gerenciar o processo de instalação do rastreador, permitindo que você cadastre o veículo do cliente e agende a instalação.
>**Importante**: Esse passo é opcional para casos em que o modelo do rastreador não requer instalação.
---

## Informando o Veículo

Nesta seção, você deve fornecer as informações do veículo do cliente que receberá o rastreador. É importante preencher todos os campos solicitados com precisão, garantindo que os dados estejam corretos.

Ao registrar o veículo, o sistema verifica se ele já existe em nossa base de dados. Se o veículo estiver registrado, o agendamento será vinculado a ele, facilitando a continuidade do processo. Caso o veículo não exista, o sistema realizará o registro adequado na nossa base de dados.

![Formulário de veículo](/images/agendar-instalacao/01.webp)

>**Observação**: Ao inserir a placa do veículo no campo "Placa", o sistema automaticamente consulta o banco de dados do Detran e preenche as informações do veículo.

---

## Agendando a Instalação

Para concluir o agendamento da instalação, escolha o *técnico*, o *tipo de serviço*, o *endereço* e a *data*. Adicione o custo da instalação e, ao clicar em "Registrar", o sistema criará uma **ordem de serviço** pendente para o técnico selecionado.

![Formulário de agendamento](/images/agendar-instalacao/02.webp)

> **Observação:** Para agendar uma instalação, é nescessário que o sistema possua técnicos já existentes. Para o cadastro de técnico basta navegar em **Cadastro > Técnico**

---

## Agendamentos

A tabela de agendamentos oferece uma visão clara e detalhada de todos os compromissos agendados. Os dados são organizados para facilitar o acompanhamento do status de cada instalação.

![Tabela de agendamentos](/images/agendar-instalacao/03.webp)

---

## Funcionalidades Adicionais
### Edição de Agendamentos
Caso seja necessário alterar algum detalhe de um agendamento, basta clicar em <img src="/images/pencil-line.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> na tabela para editar as informações de forma rápida e precisa.

### Visualização de Detalhes do Agendamento
Para visualizar os detalhes completos de um agendamento, clique em <img src="/images/eye.png" alt="ícone de olho" style="width: 36px; display: inline; margin: 0; vertical-align: middle;">. Esta ação abrirá uma visão detalhada do agendamento, fornecendo todas as informações relevantes em um só lugar.

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
    url: "#funcionalidades-adicionais",
    subLinks: [{
      title: "Edição de agendamentos",
      url: "#edição-de-agendamentos"
    },
    {
      title: "Visualização de detalhes do agendamento",
      url: "#visualização-de-detalhes-do-agendamento"
    },
    {
      title: "Notificação via WhatsApp",
      url: "#notificação-via-whatsapp"
    }]
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