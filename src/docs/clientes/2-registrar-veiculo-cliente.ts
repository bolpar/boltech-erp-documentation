export const REGISTRAR_VEICULO_CLIENTE_MARKDOWN = `
# Veículo

A página **veículo** é essencial para visualizar e gerenciar as informações dos veículos associados ao cliente. Nesta seção, você encontrará uma tabela com detalhes dos veículos, um mapa com a localização atual e informações detalhadas sobre cada veículo.
>**Observação**: Esta página está disponível **apenas para visualização e edição**. Para vincular um veículo a um cliente, acesse **Cadastro > Veículo**.
---

## Veículos do Cliente

A tabela com todos os veículos vinculados ao cliente, apresentando informações essenciais como **placa**, **BT**, **data de instalação**, **bloqueio** e **observações**. Para visualizar um veículo no mapa, clique no **ícone de mapa de localização** na linha correspondente, permitindo acessar detalhes do veículo e sua posição na seção abaixo. Para visualizar todos os veículos simultaneamente no mapa, clique no botão **Mostrar todos no mapa**.

![Tabela de veículos do cliente](/images/clientes/registrar-veiculo-cliente/01.webp)
>**Importante**: Para acessar esta página, é necessário que já exista um veículo vinculado ao cliente. Para cadastrar novos veículos, navegue até **Cadastro > Veículo**.

---

## Acompanhamento do Veículo

Abaixo da tabela, a seção acompanhamento do veículo apresenta um mapa interativo que exibe a localização atual do veículo selecionado anteriormente. Esse recurso permite uma visualização clara da posição do veículo em tempo real.

![Mapa de acompanhamento do veículo](/images/clientes/registrar-veiculo-cliente/02.webp)

### Detalhes do veículo
No canto superior direito do mapa, você encontrará o **botão detalhes**. Ao clicar neste botão, uma caixa se expande, fornecendo informações adicionais sobre o veículo, como **ignição**, **corte**, **alimentação**, **sinal GPS**, **velocidade** , **v. alimentação**, **data/hora rastreador** e **data/hora servidor**. Além disso, há opções para **desbloquear/bloquear**, um botão para **acionar comandos** e outro para acessar o **histórico do veículo**.

![Descrição do GIF](/images/clientes/registrar-veiculo-cliente/04.gif)

---

## Informações do Veículo

A última seção, reúne todos os dados detalhados sobre o veículo, incluindo alimentação, sinal GPS, velocidade, voltagem de alimentação, além das datas/hora do rastreador e do servidor. Os usuários têm a opção de desbloquear ou bloquear o veículo conforme necessário.

![Informações detalhadas do veículo](/images/clientes/registrar-veiculo-cliente/03.webp)

---

Ao completar a visualização na página de veículos, você terá acesso a informações abrangentes e organizadas, facilitando o gerenciamento e a tomada de decisões relacionadas aos veículos do cliente.

---

## Funcionalidades adicionais

### Edição de Dados do Veículo

Ao clicar em um veículo na tabela, você poderá editar facilmente os dados do veículo diretamente na seção **informações do veículo**, permitindo uma atualização rápida das informações.
`

export const REGISTRAR_VEICULO_CLIENTE_SUMMARY = [
  {
    title: "Veículos do cliente",
    url: "#veículos-do-cliente"
  },
  {
    title: "Acompanhamento do veículo",
    url: "#acompanhamento-do-veículo"
  },
  {
    title: "Informações do veículo",
    url: "#informações-do-veículo"
  },
  {
    title: "Funcionalidades adicionais",
    url: "#funcionalidades-adicionais"
  },
]

export const REGISTRAR_VEICULO_CLIENTE_ACTIONS = {
  previous: {
    title: "Criar um cliente",
    url: "/clientes/novo-cliente"
  },
  next: {
    title: "Analisar o financeiro do cliente",
    url: "/clientes/financeiro"
  }
}