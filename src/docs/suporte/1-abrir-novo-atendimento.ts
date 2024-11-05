export const ABRIR_NOVO_ATENDIMENTO_MARKDOWN = `
# Iniciar Novo Atendimento

Na página **registrar novo atendimento**, você pode buscar um cliente no sistema e começar um atendimento de maneira estruturada e prática. Esta seção garante que as informações do cliente estejam acessíveis e centralizadas para que você possa fornecer um suporte completo.

---

### Pesquisa de Cliente

No topo da página, há um campo de pesquisa onde você pode buscar pelo cliente que necessita de atendimento. Ao realizar a busca, um painel central exibe todos os clientes encontrados que correspondem ao nome ou termo pesquisado, facilitando a identificação do cliente correto.

![Gif de pesquisar cliente](/images/suporte/01.gif)

---

### Seleção do Cliente

Após localizar o cliente desejado, basta clicar sobre o nome dele na lista apresentada. Ao fazer isso, todos os dados relevantes do cliente, como nome, documento e rastreadores, serão automaticamente carregados no formulário, permitindo uma visualização clara de suas informações.

---

### Inicializar Atendimento

Com os dados do cliente preenchidos no formulário, você pode prosseguir com o atendimento. Esta seção fornece todas as ferramentas necessárias para registrar as necessidades e informações específicas do cliente, assegurando que cada atendimento seja documentado de forma detalhada e organizada.

![Gif de timer de atendimento](/images/suporte/02.gif)

>**Dica**: Certifique-se de revisar todas as informações antes de iniciar o atendimento, garantindo que todos os dados estejam corretos e atualizados para um suporte eficiente e direcionado.
`

export const ABRIR_NOVO_ATENDIMENTO_SUMMARY = [
  {
    title: "Pesquisa de cliente",
    url: "#pesquisa-de-cliente"
  },
  {
    title: "Seleção do cliente",
    url: "#seleção-do-cliente"
  },
  {
    title: "Inicializar atendimento",
    url: "#inicializar-atendimento"
  },
]

export const ABRIR_NOVO_ATENDIMENTO_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}