export const NOVO_TIPO_SERVICO_MARKDOWN = `
# Cadastro de Serviço

O cadastro de serviço é essencial para definir as características específicas dos serviços oferecidos, considerando tanto os detalhes operacionais quanto os custos envolvidos. Nesta seção, você configurará informações como a abrangência do serviço e os valores associados, permitindo uma definição clara e organizada das ofertas de serviço.

---

## Distância do Serviço

Esta seção permite especificar a abrangência do serviço, onde você pode escolher se o serviço será **local ou remoto**. Além disso, há a opção de definir um valor por quilômetro, ajustando o custo do deslocamento do técnico conforme a distância. Você também pode configurar a **área de abrangência**, especificando a quantidade de quilômetros a partir da base do técnico, garantindo clareza sobre até onde o serviço pode ser prestado.

![Seção de novo técnico](/images/tecnicos/novo-servico/01.webp)

---

## Dados do Serviço

Nesta seção, preencha as informações essenciais do serviço, como o **nome do serviço**, o **valor** associado à execução e quaisquer **observações adicionais** que possam ser relevantes para o atendimento. Além disso, é possível adicionar múltiplos serviços clicando no botão **Adicionar mais serviço**, permitindo registrar todas as opções de serviço necessárias para um atendimento completo.

![Seção de novo técnico](/images/tecnicos/novo-servico/02.webp)

`

export const NOVO_TIPO_SERVICO_SUMMARY = [
  {
    title: "Distância do serviço",
    url: "#distância-do-serviço"
  },
  {
    title: "Dados do serviço",
    url: "#dados-do-serviço"
  },
]

export const NOVO_TIPO_SERVICO_ACTIONS = {
  previous: {
    title: "Registro Técnico",
    url: "/tecnicos/novo-tecnico"
  },
  next: {
    title: "Consultar Técnicos",
    url: "/tecnicos/consultar-tecnicos"
  }
}