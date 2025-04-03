export const REGISTRAR_COBRANCA_MARKDOWN = `
# Registrar um Lançamento em Contas a Receber

A página de **Lançamento Manual** no Boltech ERP centraliza a criação de cobranças a receber, garantindo precisão nas informações financeiras e flexibilidade para adaptar-se a diferentes cenários comerciais. A estrutura divide-se em três seções estratégicas:

---

## Identificação do Lançamento  
Esta seção captura os dados fundamentais para vincular a cobrança ao contexto correto. Aqui, você associa o lançamento ao cliente responsável pelo pagamento, podendo opcionalmente relacionar produtos/serviços específicos ou adicionar observações relevantes para auditoria futura. O sistema sincroniza automaticamente dados cadastrais do cliente selecionado, agilizando o preenchimento e reduzindo erros manuais.  

![Campo identificação do lançamento](/images/financeiro/contas-a-receber/01.webp)  

> **Importante**: A vinculação correta do cliente é essencial para integrações com módulos de faturamento e relatórios contábeis.

---

## Valores Financeiros  
Define a estrutura monetária da cobrança, incluindo valores base, ajustes financeiros (como descontos ou multas) e o status inicial da transação. Esta seção permite configurar condições flexíveis, adaptando-se a políticas comerciais como incentivos para pagamento antecipado ou penalidades por atrasos, sempre respeitando a legislação vigente.  

![Campo valores financeiros](/images/financeiro/contas-a-receber/02.webp)  

---

## Prazos e Condições de Pagamento  
Controla o calendário e as regras para quitação do débito. Aqui são estabelecidos prazos de vencimento, janelas para aproveitamento de descontos, opções de parcelamento e critérios de expiração da cobrança. A configuração nesta seção impacta diretamente o fluxo de caixa e a comunicação com o cliente (ex: datas em boletos).  

![Campo prazos e condições](/images/financeiro/contas-a-receber/03.webp)  

---

## Tabela de Parcelas Geradas  
Ao finalizar as configurações, o sistema sintetiza automaticamente as obrigações financeiras em uma tabela dinâmica. Esta visão unificada mostra o cronograma de recebimentos, valores individuais por parcela e status operacional, servindo como base para acompanhamento e ajustes pontuais.  

![Tabela de parcelas](/images/financeiro/contas-a-receber/04.gif)  
`

export const REGISTRAR_COBRANCA_SUMMARY = [
  {
    title: "Identificação do Lançamento",
    url: "#identificação-do-lançamento"
  },
  {
    title: "Valores financeiro",
    url: "#valores-financeiros"
  },
  {
    title: "Prazos e condições de pagamento",
    url: "#prazos-e-condições-de-pagamento"
  },
  {
    title: "Tabela de parcelas geradas",
    url: "#tabela-de-parcelas-geradas"
  },
]

export const REGISTRAR_COBRANCA_ACTIONS = {
  previous: {
    title: "Consultar Contas a Pagar",
    url: "/financeiro/contas-a-pagar/consultar"
  },
  next: {
    title: "Consultar Contas a Receber",
    url: "/financeiro/contas-a-receber/consultar"
  }
}