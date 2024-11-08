export const INTRODUCAO_VENDAS_MARKDOWN = `
# Introdução ao Fluxo de Vendas

O **Fluxo de Vendas** é o conjunto de etapas que transforma uma oportunidade em uma venda. No Boltech ERP, esse processo abrange desde o primeiro contato com o cliente até a instalação e ativação do equipamento.

---

## O que você irá aprender
Ao final da leitura da seção **Vendas**, você estará pronto para concluir a venda de um rastreador. Confira abaixo todas as etapas que você irá compreender nesta seção:

1. **Dados**: Esta etapa inicial envolve o cadastro completo do cliente, a definição do tipo de aparelho e quantidade, a seleção do plano ideal e a aplicação de possíveis descontos ou acréscimos.
2. **Instalação**: Nesta fase, o vendedor registra o veículo e agenda a instalação, escolhendo o técnico responsável para realizar o serviço.
3. **Separação**: A seleção do equipamento específico para venda e o preenchimento do checklist de expedição são feitos para garantir que todos os itens estejam prontos para a instalação.
4. **Recebimento**: Nesta etapa, o financeiro confirma o recebimento dos valores, registrando todas as transações financeiras de forma adequada.
5. **Contrato**: Um contrato digital é enviado ao cliente para revisão e assinatura eletrônica, formalizando o acordo.
6. **Teste de Equipamento**: Durante a instalação, o equipamento é testado no veículo, e fotos e dados do processo são coletados para garantir a qualidade e precisão da instalação.

>**Importante:** É fundamental que todas essas etapas sejam realizadas para que o sistema considere a venda como finalizada.

---

## Cadastro, Visualização e Edição

### Cadastrando Pedido de Venda
Quando você inicia o cadastro de um novo pedido de venda, apenas as seções **Vendas**, **Dados e Plano** e **Agendamento de Instalação** estarão habilitadas. Nesse estágio, não há ícone de status visível, uma vez que o pedido ainda não foi finalizado. Isso garante um fluxo claro e organizado para o cadastro de novas vendas.

![Menu de páginas para edição](/images/vendas/introducao/01.webp)

### Visualizando e Editando Pedido de Venda
Ao clicar em um pedido na aba **Vendas**, você poderá visualizar e editar as informações do pedido. As abas de *agendamento de instalação*, *separação*, *recebimento*, *contrato* e *teste de equipamento* estarão disponíveis, pois são relevantes apenas quando há um pedido de venda existente. Cada aba exibe um status, indicado por círculos: amarelo para etapas com pendências e verde para aquelas concluídas.

![Menu de páginas para visualização](/images/vendas/introducao/02.webp)

`

export const INTRODUCAO_VENDAS_SUMMARY = [
  {
    title: "Introdução ao fluxo de vendas",
    url: "#introdução-ao-fluxo-de-vendas"
  },
  {
    title: "O que você irá aprender",
    url: "#o-que-você-irá-aprender"
  },
  {
    title: "Cadastro, visualização e edição",
    url: "#cadastro,-visualização,e-edição",
    subLinks: [{
      title: 'Cadastrando pedido de venda',
      url: "#cadastrando-pedido-de-venda"
    }, {
      title: 'Visualizando e editando pedido de venda',
      url: "#visualizando-e-editando-pedido-de-venda"
    }]
  },
]

export const INTRODUCAO_VENDAS_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar orçamento de pedido",
    url: "/vendas/novo-orcamento"
  }
}