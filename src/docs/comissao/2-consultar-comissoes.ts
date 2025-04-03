export const CONSULTAR_COMISSAO_MARKDOWN = `
# Consultar Comissões

Na aba **Comissões**, você encontra uma tabela completa contendo todas as comissões registradas no sistema, oferecendo uma visão clara e organizada. A interface permite a busca e filtragem de comissões por diferentes critérios, como data, situação, e origem, facilitando a localização de informações específicas.

---

## Tabela de Comissões

A tabela serve como o núcleo central para visualização de todas as comissões cadastradas. O sistema permite um gerenciamento eficiente, destacando os dados mais relevantes de cada comissão, e dando a opção de ajustar a exibição conforme a necessidade do usuário.

![Tabela de comissões](/images/comissao/consultar-comissao/01.webp)

---

## Ações disponíveis

Dentro da tabela de comissões, você pode realizar ações específicas para cada comissão listado:

### Visualização da Comissão

Ao clicar em <img src="/images/eye.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> ao lado de cada comissão, um painel detalhado será aberto, exibindo todas as informações disponíveis sobre a comissão selecionado. Esse painel foi projetado para oferecer uma visão abrangente e estruturada, facilitando o acesso a todos os dados importantes.

![Painel de comissão detalhada](/images/comissao/consultar-comissao/02.gif)

### Edição da Comissão

Você também pode editar as informações da comissão ao clicar em <img src="/images/pencil-line.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> ao lado de cada comissão. Isso permite que você atualize dados conforme necessário, garantindo que as informações estejam sempre corretas e atualizadas.

---

Com essas funcionalidades, a página de consulta de comissões assegura uma gestão eficiente e organizada, facilitando a busca, visualização e administração das comissões cadastradas no sistema.
`

export const CONSULTAR_COMISSAO_SUMMARY = [
  {
    title: "Tabela de comissões",
    url: "#tabela-de-comissões"
  },
  {
    title: "Ações disponíveis",
    url: "#ações-disponíveis",
    subLinks: [
      {
        title: "Visualização da comissão",
        url: "#visualização-da-comissão"
      },
      {
        title: "Edição da comissão",
        url: "#edição-da-comissão"
      }
    ]
  },
]

export const CONSULTAR_COMISSAO_ACTIONS = {
  previous: {
    title: "Registrar Comissão",
    url: "/comissao/nova-comissao"
  },
  next: {
    title: "Introdução á N.F",
    url: "/nota-fiscal/introducao"
  }
}