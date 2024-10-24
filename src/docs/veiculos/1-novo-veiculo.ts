export const NOVO_VEICULO_MARKDOWN = `
# Registrar um veículo

A aba **cadastro de veículo** é uma parte importante para garantir que todas as informações do veículo sejam corretamente inseridas no sistema. Além de registrar manualmente os dados, o sistema está integrado com uma API do Detran que facilita esse processo, permitindo buscar informações automaticamente a partir da placa do veículo.

---

## Informações Básicas

Aqui, você deve preencher os detalhes principais do veículo, como *placa*, *marca*, *modelo*, *ano*, *cor*, e *tipo*. Para agilizar o cadastro, ao digitar a placa e clicar em "Buscar", o sistema consulta a API do Detran e preenche automaticamente os campos disponíveis, garantindo precisão e reduzindo erros manuais.

![Campo de cadastro de veículo](/images/veiculos/novo-veiculo/01.webp)

Com este passo, o veículo registrado agora estará diretamente atrelado a um cliente e a um IMEI, o que possibilita um rastreamento mais eficiente e uma melhor organização dos dados, garantindo que as informações estejam sempre associadas de maneira clara e precisa.

>**Importante**: Antes de vincular um veículo, certifique-se de que o sistema já possui clientes e IMEIs cadastrados. Para cadastrar um novo cliente, acesse **Cadastro > Cliente**, e para registrar um IMEI, vá até **Cadastro > Equipamento**.
`

export const NOVO_VEICULO_SUMMARY = [
  {
    title: "Informações básicas",
    url: "#informações-básicas"
  },
]

export const NOVO_VEICULO_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}