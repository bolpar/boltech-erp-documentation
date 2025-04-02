export const INTRODUCAO_CHIP_MARKDOWN = `
# Introdução ao Fluxo de Chips  

O Fluxo de Chips no Boltech ERP abrange todas as operações necessárias para o registro, rastreamento e consulta de chips vinculados a dispositivos ou serviços. Este módulo foi desenvolvido para simplificar a gestão de chips, garantindo controle preciso desde a ativação até a monitoração diária.  

---

## O que você irá encontrar  

Nesta seção, você terá acesso às seguintes funcionalidades principais:  

- **Listagem de Chips**: Visualize todos os chips cadastrados em uma tabela organizada, com filtros para buscar por operadora, status ou número de série.  
- **Cadastro de Chip**: Registre novos chips no sistema, incluindo detalhes técnicos, vinculação a dispositivos e planos associados.  

>**Atenção**: Campos obrigatórios, como número de série e operadora, devem ser preenchidos para garantir a rastreabilidade e o funcionamento adequado das integrações. Atualize regularmente o status dos chips para evitar inconsistências em relatórios operacionais.  

Para acessar estas funcionalidades, navegue até **Cadastros > Chips** no menu principal do sistema.  
`

export const INTRODUCAO_CHIP_SUMMARY = [
  {
    title: "Introdução ao fluxo de chips",
    url: "#introdução-ao-fluxo-de-chips"
  },
  {
    title: "O que você irá aprender",
    url: "#o-que-você-irá-aprender"
  },
]

export const INTRODUCAO_CHIP_ACTIONS = {
  previous: {
    title: "Consultar Equipamentos",
    url: "/equipamento/consultar"
  },
  next: {
    title: "Registrar Chip",
    url: "/chip/novo-chip"
  }
}