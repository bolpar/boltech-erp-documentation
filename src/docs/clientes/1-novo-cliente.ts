export const NOVO_CLIENTE_MARKDOWN = `
# Criar um cliente

O **cadastro de cliente** é uma etapa fundamental para garantir que todas as informações essenciais sobre os clientes estejam registradas no sistema. Nesta seção, você encontrará desde dados básicos até detalhes de contato, endereços e configurações de comissão para vendedores e representantes.

---

## Informações Básicas

Esta seção é destinada ao preenchimento das informações básicas do cliente, como nome, tipo de cliente e documentos, fornecendo uma visão geral inicial que é parte fundamental do cadastro completo.

![Fieldset informações básicas](/images/clientes/novo-cliente/01.webp)

- **Inscrição Estadual**: para empresas que vendem produtos (IE) (Opcional)
- **Inscrição Municipal**: para prestadoras de serviços (IM) (Opcional)

>**Observação**: Em caso de isenção ou cadastro de cliente com CPF, inscrição estadual e municipal são opcionais no cadastro do cliente.

---

## Contatos do Cliente

Preencha as informações básicas do cliente, como nome, tipo de cliente e documentos. Além disso, esta seção permite registrar contatos diretos ou adicionar mais contatos relacionados, como empresas ou terceiros. Para cadastrar múltiplos contatos, basta clicar no botão "**Adicionar mais Contato**". Também é possível selecionar os tipos de notificação que serão direcionados ao cliente cadastrado, garantindo uma comunicação eficiente.

![Fieldset contatos do cliente](/images/clientes/novo-cliente/02.webp)

---

## Endereços do Cliente

Nesta seção, é possível cadastrar os endereços do cliente ou de terceiros. Você pode adicionar múltiplos endereços clicando no botão "**Adicionar mais Endereço**", assim como na seção de contatos, para assegurar que todos os dados estejam devidamente registrados.

![Fieldset endereços do cliente](/images/clientes/novo-cliente/03.webp)

> **Observação:** Ao informar "CEP", a API [Via CEP](https://viacep.com.br/) irá preencher automaticamente todos os campos do endereço, proporcionando comodidade e maior precisão de dados.

---

## Comissão

A seção de comissão controla o valor que será atribuido para o **representante** e **vendedor** correspondente ao cliente.

![Fieldset comissões do cliente](/images/clientes/novo-cliente/04.webp)
>**Observação**: Para preencher uma comissão, é necessário que o sistema já possua vendedores e representantes cadastrados. Para cadastrar um vendedor, acesse **Cadastro > Vendedor**, e para cadastrar um representante, acesse **Cadastro > Representante**.

---

Ao completar a seção de novo cliente, você terá uma visão abrangente e organizada dos dados do cliente, otimizando o processo de vendas e garantindo que todas as informações estejam prontamente disponíveis para a equipe.

---

## Funcionalidades adicionais

### Edição de Cliente
Na tabela da página anterior intitulada **Clientes**, localize o cliente desejado e clique no **ícone de lápis** para editar as informações do cadastro. Atualize rapidamente os dados conforme necessário, garantindo que as informações estejam sempre corretas e atualizadas.
`

export const NOVO_CLIENTE_SUMMARY = [
  {
    title: "Informações básicas",
    url: "#informações-básicas"
  },
  {
    title: "Contatos do cliente",
    url: "#contatos-do-cliente"
  },
  {
    title: "Endereços do cliente",
    url: "#endereços-do-cliente"
  },
  {
    title: "Comissão",
    url: "#comissão"
  },
  {
    title: "Funcionalidades adicionais",
    url: "#funcionalidades-adicionais",
    subLinks: [{
      title: "Edição de cliente",
      url: "#edição-de-cliente"
    }]
  },
]

export const NOVO_CLIENTE_ACTIONS = {
  previous: {
    title: "Introdução ao fluxo de cliente",
    url: "/clientes/introducao"
  },
  next: {
    title: "Registrar o veículo do cliente",
    url: "/clientes/registrar-veiculo-cliente"
  }
}