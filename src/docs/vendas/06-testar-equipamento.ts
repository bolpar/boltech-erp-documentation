export const TESTAR_EQUIPAMENTO_MARKDOWN = `
# Testar Equipamento

A página **Teste de Equipamento** é uma etapa essencial do fluxo de vendas. Aqui, associamos o rastreador ao veículo do cliente e validamos seu funcionamento.

---

## Informações do Pedido

Nesta seção, são exibidos os detalhes do pedido selecionado na página **Vendas**. Informações como *nome do cliente*, *número do pedido*, *placa do veículo*, *tipo de veículo* e *técnico responsável* são apresentadas para revisão.

![Cabeçalho do pedido](/images/vendas/testar-equipamento/01.webp)

---

## Teste de Conexão e Localização

Selecione a placa e o IMEI do rastreador. Após clicar em **"Consultar"**, as comunicações entre o rastreador e o veículo são exibidas ao redor do mapa abaixo.

![Mapa de localização do veículo](/images/vendas/testar-equipamento/02.webp)

### Detalhes do veículo
No canto superior direito do mapa, você encontrará o **"botão detalhes"**. Ao clicar neste botão, uma caixa se expande, fornecendo informações adicionais sobre o veículo, como *ignição*, *corte*, *alimentação*, *sinal GPS*, *velocidade*, *v. alimentação*, *data/hora rastreador* e *data/hora servidor*.

![Gif de detalhes do veículo](/images/vendas/testar-equipamento/03.gif)

Além disso, é disponível várias opções para gerenciar o veículo:

- **Bloqueio e Desbloqueio**: Permite bloquear ou desbloquear o veículo do cliente.
- **Comandos**: Acesso a uma lista de comandos específicos para comunicação com o veículo.
- **Histórico**: Abre uma nova página com o histórico, contendo todos os pontos registrados pelo rastreador em relação ao veículo.

---

## Validação e Evidências do Teste

Aqui, você registra informações adicionais e faz o upload de fotos da instalação. Isso valida o teste e documenta visualmente o processo, garantindo a qualidade do serviço.

![Seção de teste de conexão e localização](/images/vendas/testar-equipamento/04.webp)

---

## Histórico de Testes

A tabela histórico de testes mantém um registro de todos os rastreadores testados, incluindo *IMEI*, *placa do veículo*, *status do bloqueio* e *localização*. Isso proporciona controle e fácil consulta sobre as operações realizadas.

![Tabela de histórico de testes](/images/vendas/testar-equipamento/05.webp)

---

Ao seguir essas etapas, você garante que todas as informações e evidências do teste do rastreador estejam organizadas e acessíveis, facilitando o atendimento ao cliente.

---

## Funcionalidades Adicionais

### Edição de Dados do Teste

Ao clicar em <img src="/images/pencil-line.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> na linha do teste correspondente na **tabela de histórico de testes**, você poderá editar facilmente as informações relacionadas ao teste do equipamento. Isso permite uma atualização rápida e precisa dos dados, garantindo que todas as informações estejam sempre corretas.
`

export const TESTAR_EQUIPAMENTO_SUMMARY = [
  {
    title: "Informações do pedido",
    url: "#informações-do-pedido"
  },
  {
    title: "Teste de conexão e localização",
    url: "#primeiros-passos-no-sistema",
    subLinks: [{
      title: "Detalhes do veículo",
      url: "#detalhes-do-veículo"
    }]
  },
  {
    title: "Validação e evidências do teste",
    url: "#validação-e-evidências-do-teste"
  },
  {
    title: "Histórico de testes",
    url: "#histórico-de-testes"
  },
  {
    title: "Funcionalidades adicionais",
    url: "#funcionalidades-adicionais",
    subLinks: [{
      title: "Edição de dados do teste",
      url: "#edição-de-dados-do-teste"
    }]
  },
]

export const TESTAR_EQUIPAMENTO_ACTIONS = {
  previous: {
    title: "Gerar contrato do pedido",
    url: "/vendas/gerar-contrato"
  },
  next: {
    title: "Consultar pedidos de venda",
    url: "/vendas/consultar-pedidos"
  }
}