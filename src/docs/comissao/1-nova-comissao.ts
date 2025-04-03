export const NOVA_COMISSAO_MARKDOWN = `
# Registro de Nova Comissão

Na aba **Dados**, você encontrará todos os campos necessários para o cadastro de uma nova comissão no sistema. Esses campos incluem informações gerais e específicas, que juntas formam a base para uma gestão de comissões eficiente.

---

## Cadastro da Comissão

Nesta única seção, você deve fornecer dados que definem a comissão.

![Seção cadastro de comissão](/images/comissao/nova-comissao/01.webp)

- **Nome da Comissão**: Uma identificação clara e única para a comissão.
- **Datas de Início e Fim**: Definem o período de validade da comissão.
- **Porcentual e Valor Fixo**: Especificam como a comissão será calculada, podendo ser baseada em porcentagem ou valor fixo.
- **Dia de Fechamento**: Determina a data específica para o cálculo final da comissão.
- **Escolha do Vendedor e Representante**: Permite a associação de um vendedor e um representante à comissão.
- **Porcentagem do Vendedor e do Representante**: Define como os valores da comissão serão divididos entre as partes.

---

Esta seção é crucial para garantir que todas as configurações estejam corretas, assegurando precisão nos cálculos e distribuição das comissões no sistema Boltech ERP.
`

export const NOVA_COMISSAO_SUMMARY = [
  {
    title: "Cadastro da comissão",
    url: "#cadastro-da-comissão"
  },
]

export const NOVA_COMISSAO_ACTIONS = {
  previous: {
    title: "Introdução á Comissões",
    url: "/comissao/introducao"
  },
  next: {
    title: "Consultar Comissões",
    url: "/comissao/consultar"
  }
}