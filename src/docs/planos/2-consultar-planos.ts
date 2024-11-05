export const CONSULTAR_PLANOS_MARKDOWN = `
# Consultar Planos

Na aba **Planos**, você encontra uma tabela listando todos os planos cadastrados no sistema, oferecendo uma visão clara e organizada. A interface permite a busca e filtragem de planos por diferentes critérios, facilitando a localização de informações específicas.

---

## Tabela de Planos

A tabela serve como o núcleo central para visualização de todos os planos registrados. O sistema permite um gerenciamento eficiente, destacando os dados mais relevantes de cada plano e dando a opção de ajustar a exibição conforme a necessidade do usuário.

![Tabela de planos](/images/planos/planos/01.webp)

---

## Ações disponíveis

Dentro da tabela de planos, você pode realizar ações específicas para cada plano listado:

### Visualização do Plano

Ao clicar no <img src="/images/eye.png" alt="ícone de olho" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> ao lado de cada plano, um painel lateral será aberto, exibindo todas as informações disponíveis sobre o plano selecionado. Esse painel foi projetado para oferecer uma visão abrangente e estruturada, facilitando o acesso a todos os dados importantes.

![Painel de visualização do plano](/images/planos/planos/02.gif)

### Edição do Plano

Na parte superior da tabela, você encontrará um ícone de lápis <img src="/images/pencil-line.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> ao lado de cada plano. Ao clicar neste ícone, você será redirecionado para uma nova tela, onde poderá editar as informações do plano selecionado. Essa funcionalidade permite que você faça atualizações e ajustes conforme necessário, garantindo que os dados estejam sempre corretos e atualizados.

---

Com essas funcionalidades, a página de consulta de planos assegura uma gestão eficiente e organizada, facilitando a busca, visualização e administração dos planos cadastrados no sistema.
`

export const CONSULTAR_PLANOS_SUMMARY = [
  {
    title: "Introdução ao fluxo de clientes",
    url: "#introdução-ao-fluxo-de-clientes"
  },
  {
    title: "O que você irá aprender",
    url: "#o-que-você-irá-aprender"
  },
]

export const CONSULTAR_PLANOS_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}