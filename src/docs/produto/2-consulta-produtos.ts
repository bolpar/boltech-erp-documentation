export const CONSULTA_PRODUTOS_MARKDOWN = `
# Consulta de Produtos

A página de **consulta de produtos** centraliza o gerenciamento de todos os itens cadastrados no sistema, permitindo busca rápida, análise do status atual e acesso às informações completas de cada produto. Esta seção é projetada para oferecer uma visão clara e organizada do inventário, facilitando operações diárias de controle e atualização.

---

## Tabela de Produtos

A tabela exibe todos os produtos registrados no sistema, com informações essenciais para identificação rápida, como código SKU, nome e status (ativo/inativo). Utilizando a barra de busca, é possível localizar itens específicos digitando parte do nome ou SKU. Filtros adicionais permitem identificar produtos por status operacional, otimizando a gestão do estoque.

![Tabela de produtos](/images/produto/consultar-produtos/01.webp)

Nesta página, você também pode iniciar o cadastro de novos produtos ou exportar um relatório completo em formato de planilha para análise externa. A interface mantém-se intuitiva, garantindo que até usuários menos experientes consigam navegar com facilidade.

---

## Detalhamento e Edição

Clicando no ícone de visualização (<img src="/images/eye.png" alt="ícone de visualização" style="width: 36px; display: inline; margin: 0; vertical-align: middle;">), um painel lateral é aberto com **todas as informações cadastradas do produto**, incluindo dados básicos, detalhes fiscais e custos. Essa visualização oferece uma análise completa sem necessidade de navegar para outras telas.

![Gif de visualização do produto](/images/produto/consultar-produtos/02.gif)

Para ajustes, o ícone de edição (<img src="/images/pencil-line.png" alt="ícone de edição" style="width: 36px; display: inline; margin: 0; vertical-align: middle;">) redireciona para o formulário de cadastro pré-preenchido, onde é possível atualizar qualquer informação do produto. Todas as alterações são refletidas imediatamente no sistema, garantindo sincronia entre os dados.

---

> **Observação:** Produtos marcados como "Inativos" não serão incluídos em novas transações comerciais. Utilize o filtro de status para identificar esses itens e atualizá-los conforme necessário.

Para acessar esta funcionalidade, navegue até **Estoque > Produtos** no menu principal.
`

export const CONSULTA_PRODUTOS_SUMMARY = [
  {
    title: "Tabela de produtos",
    url: "#tabela-de-produtos"
  },
  {
    title: "Detalhamento e edição",
    url: "#detalhamento-e-edição"
  },
]

export const CONSULTA_PRODUTOS_ACTIONS = {
  previous: {
    title: "Registrar Produto",
    url: "/produto/novo-produto",

  },
  next: {
    title: "Introdução á Veículos",
    url: "/veiculos/introducao"
  }
}