export const GERAR_RECEBIMENTO_MARKDOWN = `
# Recebimento

A página **recebimento** é projetada para a gestão de cobranças de uma venda, permitindo registrar e controlar as diferentes formas de pagamento acordadas com o cliente.

---

## Formas de Recebimento
Nesta seção, você pode gerenciar as diversas formas de pagamento acordadas com o cliente. Por padrão, somente as formas de pagamento permitidas no plano estarão habilitadas para seleção.

- **Formas de Pagamento Disponíveis**: dinheiro, PIX, cartão de crédito/débito, boleto, crédito com o estabelecimento.
- **Campo de Desconto**: Permite aplicar um desconto, limitado pelo usuário que está realizando o recebimento. O administrador do sistema pode ajustar esse limite conforme necessário.

> **Dica:** Caso seja necessário liberar outras formas de recebimento ou ajustar limites de desconto, solicite ao administrador do sistema.

---

## Informações Gerais
No topo da tela, é exibido um resumo do **plano selecionado**, destacando seus valores e quaisquer custos adicionais envolvidos na negociação. Este informativo auxilia na visualização do valor total da cobrança, levando em conta todos os aspectos do plano e ajustes realizados.

![Cabeçalho Formas de Recebimento](/images/vendas/recebimento/01.webp)

---

## Recebimento via PIX
Ao informar o valor para pagamento via **PIX** e confirmar, uma tela adicional será exibida, permitindo que você defina a data de vencimento e adicione observações antes de gerar o QR Code ou a chave para o PIX copia e cola.

![Fieldset PIX](/images/vendas/recebimento/01.gif)

---

## Recebimento via Cartão
Para pagamentos via **Cartão**, selecione o tipo (crédito ou débito) e a quantidade de parcelas. O sistema calculará automaticamente as taxas aplicáveis e gerará uma projeção das parcelas. Após confirmar o lançamento, um link seguro é gerado para que o cliente preencha os dados do cartão.

![Fieldset Cartão](/images/vendas/recebimento/02.gif)


---

## Recebimento via Boleto
Ao lançar um pagamento via **Boleto**, selecione a data de vencimento e o número de parcelas. Após incluir esses dados, o sistema gerará uma previsão de pagamento, enviando automaticamente o boleto para o e-mail do cliente com antecedência.

![Fieldset Boleto](/images/vendas/recebimento/03.gif)

> **Observação**: Você pode imprimir o boleto diretamente ou acessá-lo pela área do cliente.

---

## Recebimento com Crédito
Na seção de **Crédito**, é possível aplicar créditos que o cliente possua para abater no valor da venda. Basta selecionar os créditos desejados e salvar a operação.

![Fieldset Crédito](/images/vendas/recebimento/04.gif)

---

## Emissão de NFe
A funcionalidade de emissão de Nota Fiscal Eletrônica (NFe) estará disponível em breve.
`

export const GERAR_RECEBIMENTO_SUMMARY = [
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

export const GERAR_RECEBIMENTO_ACTIONS = {
  previous: {
    title: "Iniciar separação do pedido",
    url: "/vendas/iniciar-separacao"
  },
  next: {
    title: "Gerar contrato do pedido",
    url: "/vendas/gerar-contrato"
  }
}