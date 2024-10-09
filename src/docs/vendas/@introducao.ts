export const INTRODUCAO_VENDAS_MARKDOWN = `
# Como Fazer um Pedido de Venda

O fluxo de vendas do sistema Boltech é composto por uma série de etapas sequenciais que garantem que todas as informações essenciais para o controle e acompanhamento das vendas sejam registradas no sistema de forma precisa.

## Etapas do Fluxo de Venda

O processo de venda envolve as seguintes etapas:
1. Cadastro do cliente; 
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
13. Conclusão

> **Importante:** É necessário que todas as etapas sejam concluídas para que o sistema considere a venda como finalizada.

## Cadastro do Cliente

O primeiro passo é garantir que o cliente esteja cadastrado no sistema. O cadastro pode ser realizado de várias maneiras:

**Manual:** Através do menu "Cadastro > Cliente > Registrar novo cliente".
**Cadastro automático:** Enviando um link de cadastro para o cliente, onde ele preencherá um formulário com os dados necessários.
**Diretamente pelo fluxo de vendas:** Ao preencher os campos na aba "Dados" e clicar em "salvar", o cliente é cadastrado automaticamente.
**Lead captado via Landing Page:** Clientes que se registram por meio de campanhas online.

Quando o cliente é cadastrado via link de cadastro ou como Lead, o pedido estará disponível na tela inicial do fluxo de vendas, onde poderá ser selecionado para iniciar ou continuar o processo de venda.

## Tipo do Aparelho e Quantidade

Na aba "Dados" dentro do fluxo de vendas, o usuário deve selecionar o tipo do equipamento e a quantidade desejada. É importante observar que o sistema permite apenas **um tipo de equipamento por pedido de venda**.

## Seleção do Plano

Os planos disponíveis devem ser apresentados ao cliente de forma clara, podendo ser exibidos graficamente ou gerados em PDF para facilitar a análise e escolha. Os planos devem estar previamente cadastrados no sistema em "Cadastros > Planos" ou "Administrativo > Planos".

## Pagamento (Descontos e Acréscimos)

Nesta etapa, é possível adicionar descontos ou acréscimos ao valor final do pedido, além de incluir observações relevantes, se necessário. Os valores de desconto e acréscimo podem ser especificados em valores monetários. 

Essas informações ajudam a ajustar o valor do pedido de acordo com as condições acordadas com o cliente.

---

Essas etapas são projetadas para garantir que todas as transações de vendas sejam realizadas de maneira organizada e eficiente, fornecendo uma base sólida para a gestão das vendas no sistema Boltech.
`

export const INTRODUCAO_VENDAS_SUMMARY = [
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