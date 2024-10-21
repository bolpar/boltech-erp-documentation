export const NOVO_FORNECEDOR_MARKDOWN = `
## Registro de Novo Fornecedor

A página **Registro de Fornecedor** é onde você realiza o **cadastro de novos fornecedores**. Aqui, você pode incluir todas as informações essenciais para registrar um fornecedor no sistema, assegurando que seus dados estejam organizados de maneira clara e acessível para futuras consultas e atualizações.

---

## Informações Básicas
Nesta seção, você **cadastra os dados fundamentais do fornecedor**. Isso inclui informações essenciais que ajudam a identificar e classificar o fornecedor dentro do sistema.

![Fieldset Informações Básicas](/images/fornecedores/novo-fornecedor/01.webp)

---

## Contato
Aqui, você pode **vincular contatos ao fornecedor**. Caso o fornecedor tenha mais de um contato, basta clicar no botão **Adicionar mais contato** para incluir múltiplos contatos. Isso garante que todas as informações de comunicação com o fornecedor sejam devidamente registradas e acessíveis.

![Fieldset Contato](/images/fornecedores/novo-fornecedor/02.webp)

---

## Endereço
Preencha o endereço do fornecedor nesta seção. Você pode cadastrar **mais de um endereço** clicando no botão **Adicionar mais endereço**, o que proporciona flexibilidade e precisão na gestão das informações de localização do fornecedor.

![Fieldset Endereço](/images/fornecedores/novo-fornecedor/03.webp)

---

Ao seguir os passos acima, você terá registrado um novo fornecedor no nosso sistema. Isso garante que todas as informações relevantes estejam organizadas e prontas para uso em processos futuros.

---

## Funcionalidades Adicionais
### Edição de Fornecedor

Para editar as informações de um fornecedor, localize o fornecedor desejado na tabela da aba **Fornecedores**. Clique no **ícone de lápis** ao lado do fornecedor correspondente, e você será direcionado para o fluxo de fornecedores, onde poderá visualizar e atualizar os dados conforme necessário.
`

export const NOVO_FORNECEDOR_SUMMARY = [
  {
    title: "Informações básicas",
    url: "#informações-básicas"
  },
  {
    title: "Contato",
    url: "#contato"
  },
  {
    title: "Endereço",
    url: "#endereço",
  },
  {
    title: "Funcionalidades adicionais",
    url: "#funcionalidades-adicionais",
    subLinks: [{
      title: "Edição de fornecedor",
      url: "#edição-de-fornecedor"
    }]
  }
]

export const NOVO_FORNECEDOR_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}