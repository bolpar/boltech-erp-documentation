export const CONSULTA_CHIPS_MARKDOWN = `
# Consulta de Chips

A página de **consulta de chips** oferece uma visão centralizada de todos os dispositivos de comunicação registrados no sistema, permitindo gerenciar planos, verificar status operacionais e atualizar informações críticas. Esta seção foi projetada para agilizar o acompanhamento diário dos chips ativos e inativos, integrando-se perfeitamente ao fluxo de gestão de equipamentos.

---

## Tabela de Chips

A tabela exibe todos os chips cadastrados, organizados por informações essenciais como ICCID, número associado, operadora e situação atual (Ativo/Inativo). Através da barra de pesquisa, é possível localizar rapidamente qualquer dispositivo utilizando o ICCID completo ou parcial. Filtros adicionais permitem identificar chips por operadora ou status, otimizando a gestão em larga escala.

![Tabela de chips](/images/chip/consulta-chips/01.webp)

Nesta mesma página, estão disponíveis opções para **registrar novos chips em massa** (via importação de arquivo .csv) ou iniciar um cadastro individual. A exportação da lista completa para análise externa também é facilitada, mantendo o padrão de outras seções do sistema.

---

## Detalhamento e Atualizações

Ao clicar no ícone de visualização (<img src="/images/eye.png" alt="ícone de detalhes" style="width: 36px; display: inline; margin: 0; vertical-align: middle;">), um painel lateral é aberto com **todas as informações técnicas e financeiras do chip**, incluindo detalhes do plano contratado, valores de mensalidade e datas relevantes. Essa visualização unificada permite verificar saldos, créditos e configurações sem necessidade de navegar entre telas.

![Visualização de Chip](/images/chip/consulta-chips/02.gif)

Para ajustes, utilize o ícone de edição (<img src="/images/pencil-line.png" alt="ícone de edição" style="width: 36px; display: inline; margin: 0; vertical-align: middle;">) para acessar o cadastro completo do chip. Todas as alterações são aplicadas instantaneamente, garantindo que atualizações de status (como inativar um chip) sejam refletidas imediatamente na tabela principal.

---

> **Observação:** Chips marcados como "Inativos" permanecem no histórico do sistema, mas não podem ser vinculados a novos equipamentos. Utilize o filtro de status para gerenciar dispositivos não operacionais.

Para acessar esta funcionalidade, navegue até **Cadastro > Chips** no menu principal.`

export const CONSULTAR_CHIPS_SUMMARY = [
  {
    title: "Tabela de Chips",
    url: "#tabela-de-chips"
  },
  {
    title: "Detalhamento e Atualizações",
    url: "#detalhamento-e-atualizações"
  },
]

export const CONSULTAR_CHIPS_ACTIONS = {
  previous: {
    title: "Registrar Chip",
    url: "/chip/novo-chip"
  },
  next: {
    title: "Introdução á produtos",
    url: "/produto/introducao"
  }
}