export const INICIAR_SEPARACAO_MARKDOWN = `
# Iniciar separação do pedido

A área de **separação** é destinada ao responsável pela seleção do equipamento a ser enviado ao técnico ou entregue em mãos ao cliente. Nesta seção, você encontrará informações relevantes sobre o processo de separação, desde dados básicos do cliente e pedido até a escolha e preparação do equipamento.

>**Importante**: Esta página só pode ser acessada ao clicar em um pedido de venda já existente.
---

## Dados da Separação

Esta seção inicial apresenta um resumo das informações essenciais relacionadas ao pedido. Ela serve como uma visão geral, permitindo que o usuário tenha acesso rápido aos dados mais relevantes antes de prosseguir com o fluxo de trabalho.


![Cabeçalho de informações do pedido](/images/vendas/iniciar-separacao/01.webp)
>**Observação**: Este componente é exibido em todas as abas relacionadas ao **fluxo de venda** quando o usuário clica em um pedido de venda já existente.

---

## Seleção de Equipamento

Na seção de **seleção de equipamento**, que é acessada após a escolha de um pedido de venda, o vendedor encontra um checklist com os itens necessários para a embalagem do aparelho, como: *rastreador*, *chicote*, *relé*, *fusível*, *manual*, *contrato* e *etiqueta de garantia*. Esses itens são essenciais para assegurar que todos os componentes necessários para a instalação e o funcionamento estejam disponíveis.

![Seção de seleção de equipamento](/images/vendas/iniciar-separacao/02.webp)

Ao marcar cada item do checklist, o sistema registra automaticamente a *data*, *hora* e o *usuário* responsável pela ação. Abaixo do checklist, o separador pode selecionar os *IMEIs* dos dispositivos associados ao pedido de venda atual, garantindo que apenas os que correspondem ao tipo previamente definido sejam exibidos. Essa funcionalidade é crucial, pois permite que o vendedor distribua os IMEIs para todas as quantidades de equipamentos vinculadas ao pedido.

Se o chip de telemetria ainda não estiver vinculado ao rastreador, essa ação pode ser realizada nesta mesma tela. O usuário deve inserir o *número de telefone* e a *operadora*, garantindo que todos os dados estejam corretamente vinculados.

> **Atenção:** Caso o chip não tenha sido cadastrado previamente, ao finalizar o vínculo do chip com o aparelho, o sistema gerará uma pendência para que as informações faltantes sejam completadas posteriormente. É fundamental que o checklist seja concluído com todos os passos de separação, respeitando as regras estabelecidas, para garantir a precisão no atendimento ao cliente.


---

## Equipamentos Prontos

A tabela de **equipamentos prontos** exibe uma tabela com todos os aparelhos selecionados, juntamente com informações como *IMEI*, *número de telefone* e *operadora*. O usuário pode selecionar qualquer registro nesta tabela para editar as informações, caso necessário.

![Tabela de equipamentos finalizados](/images/vendas/iniciar-separacao/03.webp)

> **Atenção:** A seleção de equipamentos e todas as etapas do fluxo de venda devem ser realizadas com atenção para evitar erros e desencontros de informações.

---

## Funcionalidades Adicionais

### Edição de Equipamentos

Após a seleção e finalização dos equipamentos, é possível editar os detalhes de qualquer aparelho diretamente na tabela de **Equipamentos Finalizados**, garantindo que as informações estejam sempre corretas e atualizadas.
`

export const INICIAR_SEPARACAO_SUMMARY = [
  {
    title: "Dados da separação",
    url: "#dados-da-separação"
  },
  {
    title: "Seleção de equipamento",
    url: "#seleção-de-equipamento"
  },
  {
    title: "Equipamentos prontos",
    url: "#equipamentos-prontos"
  },
  {
    title: "Funcionalidades adicionais",
    url: "#funcionalidades-adicionais"
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