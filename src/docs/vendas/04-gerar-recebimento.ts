export const GERAR_RECEBIMENTO_MARKDOWN = `
# Gerar recebimento do pedido

A página **recebimento** é projetada para a gestão de cobranças de uma venda, permitindo registrar e controlar as diferentes formas de pagamento acordadas com o cliente.

---

## Informações Gerais
No topo da tela, é exibido um resumo do plano selecionado, destacando seus valores e quaisquer custos adicionais envolvidos na negociação. Este informativo auxilia na visualização do valor total da cobrança, levando em conta todos os aspectos do plano e ajustes realizados.

![Cabeçalho Formas de Recebimento](/images/vendas/recebimento/01.webp)

---

## Recebimento via PIX
Ao informar o valor para pagamento via **PIX** e confirmar, uma tela adicional será exibida, permitindo que você defina a data de vencimento e adicione observações antes de gerar o QR Code ou a chave para o PIX copia e cola.

![Fieldset PIX](/images/vendas/recebimento/01.gif)

---

## Recebimento via Cartão
Para pagamentos via **cartão**, selecione o tipo (crédito ou débito) e a quantidade de parcelas. O sistema calculará automaticamente as taxas aplicáveis e gerará uma projeção das parcelas. Após confirmar o lançamento, um link seguro é gerado para que o cliente preencha os dados do cartão.

![Fieldset Cartão](/images/vendas/recebimento/02.gif)


---

## Recebimento via Boleto
Ao lançar um pagamento via **boleto**, selecione a data de vencimento e o número de parcelas. Após incluir esses dados, o sistema gerará uma previsão de pagamento, enviando automaticamente o boleto para o e-mail do cliente com antecedência.

![Fieldset Boleto](/images/vendas/recebimento/03.gif)

> **Observação**: Você pode imprimir o boleto diretamente ou acessá-lo pela área do cliente.

---

## Recebimento com Crédito
Na seção de **crédito**, é possível aplicar créditos que o cliente possua para abater no valor da venda. Basta selecionar os créditos desejados e salvar a operação.

![Fieldset Crédito](/images/vendas/recebimento/04.gif)

---

## Emissão de NFe
A funcionalidade de emissão de Nota Fiscal Eletrônica (NFe) estará disponível em breve.
`

export const GERAR_RECEBIMENTO_SUMMARY = [
  {
    title: "Informações gerais",
    url: "#informações-gerais"
  },
  {
    title: "Recebimento via PIX",
    url: "#recebimento-via-pix"
  },
  {
    title: "Recebimento via cartão",
    url: "#recebimento-via-cartão"
  },
  {
    title: "Recebimento via boleto",
    url: "#recebimento-via-boleto"
  },
  {
    title: "Recebimento com crédito",
    url: "#recebimento-com-crédito"
  },
  {
    title: "Emissão de NFe",
    url: "#emissão-de-nfe"
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