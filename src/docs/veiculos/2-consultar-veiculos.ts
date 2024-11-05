export const CONSULTAR_VEICULOS_MARKDOWN = `
# Consultar Veículos

A página de consulta de veículos é fundamental para gerenciar e visualizar todas as informações registradas sobre os veículos no sistema. Com uma interface clara e intuitiva, ela proporciona uma navegação eficiente pelos dados, permitindo acesso rápido e detalhado a cada veículo cadastrado.

---

## Tabela de Veículos

Logo abaixo, você encontrará a tabela de veículos, onde é possível visualizar todos os veículos registrados no sistema. Nesta seção, você pode pesquisar por um veículo utilizando sua placa ou filtrar os resultados pela data de registro do veículo, facilitando a localização de informações específicas e a análise de dados de forma prática.

![Tabela de veículos](/images/veiculos/consultar-veiculos/01.webp)

- **Exportar Relatório**: Este botão gera um relatório completo contendo as informações dos veículos, ideal para análises detalhadas e documentação externa.
- **Registrar Novo Veículo**: Direciona você para a página de cadastro, onde um novo veículo pode ser adicionado ao sistema.

---

## Ações Disponíveis

Dentro da tabela de veículos, você pode realizar ações específicas para cada veículo listado:

### Visualização do Veículo

Ao clicar em <img src="/images/eye.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> ao lado de cada veículo, um painel detalhado será aberto, exibindo todas as informações disponíveis sobre o veículo selecionado. Esse painel foi projetado para oferecer uma visão abrangente e estruturada, facilitando o acesso a todos os dados importantes.

![Painel de detalhes do veículo](/images/veiculos/consultar-veiculos/02.gif)

### Edição do Veículo

Você também pode editar as informações do veículo ao clicar em <img src="/images/pencil-line.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> ao lado de cada veículo. Isso permite que você atualize dados conforme necessário, garantindo que as informações estejam sempre corretas e atualizadas.

---

Com essas funcionalidades, a página de consulta de veículos assegura uma gestão eficiente e organizada, facilitando a busca, visualização e administração das informações cadastradas no sistema.
`

export const CONSULTAR_VEICULOS_SUMMARY = [
  {
    title: "Tabela de veículos",
    url: "#tabela-de-veículos"
  },
  {
    title: "Ações disponíveis",
    url: "#ações-disponíveis",
    subLinks: [
      {
        title: "Visualização do veículo",
        url: "#visualização-do-veículo"
      },
      {
        title: "Edição do veículo",
        url: "#edição-do-veículo"
      }
    ]
  }
]

export const CONSULTAR_VEICULOS_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}