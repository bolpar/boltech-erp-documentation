export const CONSULTAR_CONTAS_A_RECEBER_MARKDOWN = `
# Consultar Contas a Receber

A aba **Contas a Receber** permite visualizar e gerenciar todas as cobranças pendentes de forma organizada, com foco em duas áreas principais: uma tabela resumida e um painel de detalhes para consulta individual.

---

## Tabela de Cobranças Pendentes  
![Tabela de contas a receber](/images/financeiro/contas-a-receber/consulta/01.webp)  

A tabela exibe uma lista simplificada das cobranças em aberto, destacando informações essenciais como valor, forma de pagamento, prazos e status. Sua estrutura permite:  
- **Filtrar cobranças** por critérios como data de vencimento ou cliente.  
- **Acessar detalhes** de qualquer registro com um clique.  
- **Exportar dados** para uso externo (ex: relatórios em CSV).  

---

## Painel de Detalhes da Cobrança  
![Detalhes da conta](/images/financeiro/contas-a-receber/consulta/02.gif)  

Ao selecionar uma cobrança, o painel exibe um resumo unificado com dados do cliente, valores financeiros (como principal, descontos e multas) e prazos operacionais (vencimento, expiração e histórico de atualizações). Seu propósito é centralizar informações críticas em um único espaço, permitindo consultas rápidas e ajustes simples, como alterações de status ou inclusão de observações.  
`

export const CONSULTAR_CONTAS_A_RECEBER_SUMMARY = [
  {
    title: "Tabela de cobranças pendentes",
    url: "#tabela-de-cobranças-pendentes"
  },
  {
    title: "Painel de detalhes da cobrança",
    url: "#painel-de-detalhes-da-cobrança"
  },
]

export const CONSULTAR_CONTAS_A_RECEBER_ACTIONS = {
  previous: {
    title: "Efetuar Cobrança",
    url: "/fornecedores/contas-a-receber/registrar-cobranca"
  },
  next: {
    title: "Introdução á Comissões",
    url: "/comissao/introducao"
  }
}