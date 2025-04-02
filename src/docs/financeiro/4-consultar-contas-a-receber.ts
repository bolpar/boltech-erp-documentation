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

export const INTRODUCAO_CLIENTE_SUMMARY = [
  {
    title: "Introdução ao fluxo de clientes",
    url: "#introdução-ao-fluxo-de-clientes"
  },
  {
    title: "O que você irá aprender",
    url: "#o-que-você-irá-aprender"
  },
]

export const INTRODUCAO_CLIENTE_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}