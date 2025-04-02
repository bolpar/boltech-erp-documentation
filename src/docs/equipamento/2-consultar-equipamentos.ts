export const CONSULTAR_EQUIPAMENTO_MARKDOWN = `
# Consulta de Equipamentos

A página de **consulta de equipamentos** é essencial para gerenciar e acompanhar todos os dispositivos registrados no sistema. Com uma interface simples e intuitiva, ela permite buscar rapidamente um equipamento, visualizar detalhes e realizar edições de maneira eficiente.

---

## Tabela de Equipamentos

Nesta seção você encontrará a tabela com todos os equipamentos cadastrados no sistema. Nessa seção, você pode realizar buscas rápidas utilizando o IMEI do equipamento e aplicar filtros para refinar a pesquisa. A tabela exibe as informações essenciais de cada equipamento, facilitando a localização e consulta dos dados.

![Tabela de equipamentos](/images/equipamento/consultar/01.webp)

Além disso, você tem as opções de:

- **Exportar Relatório**: Gera um relatório completo com todos os dados dos equipamentos cadastrados, útil para análise externa ou para manter um registro físico.
- **Registrar Novo Equipamento**: Inicia o processo de cadastro de um novo equipamento diretamente nesta página, permitindo adicionar rapidamente um novo dispositivo ao sistema.

---

## Ações Disponíveis

Dentro da tabela de equipamentos, você pode realizar ações específicas para cada equipamento listado:


### Visualização do Equipamento

Ao clicar em <img src="/images/eye.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> na linha do equipamento correspondente, um painel lateral é aberto com todos os detalhes do equipamento selecionado.

![Gif de painel lateral](/images/equipamento/consultar/02.gif)

### Edição do Equipamento

Se for necessário editar as informações do equipamento, basta clicar em <img src="/images/pencil-line.png" alt="ícone de lápis" style="width: 36px; display: inline; margin: 0; vertical-align: middle;"> ao lado da linha correspondente. Isso redireciona você para a página de edição, com os dados do equipamento já carregados, permitindo realizar ajustes rápidos e eficientes nas informações registradas.
`

export const CONSULTAR_EQUIPAMENTO_SUMMARY = [
  {
    title: "Identificação do Chip",
    url: "#identificação-do-chip"
  },
  {
    title: "Custos e Datas",
    url: "#custos-e-datas"
  },
  {
    title: "Associação ao Equipamento",
    url: "#associação-ao-equipamento"
  },
]

export const CONSULTAR_EQUIPAMENTO_ACTIONS = {
  previous: {
    title: "Introdução á Chips",
    url: "/chip/introducao"
  },
  next: {
    title: "Consultar Chips",
    url: "/chip/consultar"
  }
}