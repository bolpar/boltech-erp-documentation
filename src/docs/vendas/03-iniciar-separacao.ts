export const INICIAR_SEPARACAO_MARKDOWN = `
# Iniciar separação do pedido

A aba de **Separação** é destinada ao responsável pela seleção do equipamento a ser enviado ao técnico ou entregue em mãos ao cliente. Nesta seção, você encontrará informações relevantes sobre o processo de separação, desde dados básicos do cliente e pedido até a escolha e preparação do equipamento.

---

## Dados da Separação

Esta seção inicial apresenta um resumo das informações essenciais relacionadas ao pedido. Ela serve como uma visão geral, permitindo que o usuário tenha acesso rápido aos dados mais relevantes antes de prosseguir com o fluxo de trabalho.


![Cabeçalho de informações do pedido](/images/vendas/iniciar-separacao/01.webp)
>**Observação**: Este componente é exibido em todas as abas relacionadas ao **Fluxo de Venda** quando o usuário clica em um pedido de venda já existente.

---

## Seleção de Equipamento

Na seção de seleção de equipamento, o separador encontra um checklist com os passos necessários para embalar o aparelho, garantindo que todos os componentes para a instalação do rastreador estejam disponíveis.

![Seção de seleção de equipamento](/images/vendas/iniciar-separacao/02.webp)

Ao marcar os itens do checklist, o sistema salva a data, hora e o usuário responsável somente quando o separador finaliza a separação. Abaixo do checklist, são exibidos os IMEIs dos dispositivos associados ao pedido de venda. Se o pedido inclui três unidades, o separador verá três IMEIs, permitindo que teste cada equipamento individualmente.

Caso o chip de telemetria ainda não esteja vinculado, o usuário pode inseri-lo nesta tela, fornecendo o número de telefone e a operadora.

>**Observação**: No caso da imagem acima, o rastreador já possui vínculo com o chip de telemetria, desabilitando os campos "telefone" e "operadora".

---

## Equipamentos Prontos

A tabela de equipamentos prontos exibe uma tabela com todos os aparelhos selecionados, juntamente com informações como *IMEI*, *número do chip* e *operadora*.

![Tabela de equipamentos finalizados](/images/vendas/iniciar-separacao/03.webp)

---

## Funcionalidades Adicionais

### Edição de Equipamentos

Após a seleção e finalização dos equipamentos, é possível editar os detalhes de qualquer aparelho clicando em <img src="/images/pencil-line.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> diretamente na tabela de equipamentos prontos, garantindo que as informações estejam sempre corretas e atualizadas.
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
    url: "#funcionalidades-adicionais",
    subLinks: [
      { title: "Edição de equipamentos", url: "#edição-de-equipamentos" }
    ]
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