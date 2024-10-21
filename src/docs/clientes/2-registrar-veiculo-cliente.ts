export const REGISTRAR_VEICULO_CLIENTE_MARKDOWN = `
# Registrar o veículo do cliente

A página **veículo** é essencial para visualizar e gerenciar as informações dos veículos associados ao cliente. Nesta seção, você encontrará uma tabela com detalhes dos veículos, um mapa com a localização atual e informações detalhadas sobre cada veículo.
>**Observação**: Esta página está disponível **somente para visualização e edição**, caso o cliente já possua um vínculo com um veículo no sistema. Para vincular um veículo a um cliente, acesse **Cadastro > Veículo**.
---

## Veículos do Cliente

A tabela com todos os veículos vinculados ao cliente, apresenta informações essenciais como *placa*, *BT*, *data de instalação*, *bloqueio* e *observações*. Para visualizar um veículo no mapa, clique no **ícone de mapa de localização** na linha correspondente, permitindo acessar detalhes do veículo e sua posição na seção abaixo. Para visualizar todos os veículos simultaneamente no mapa, clique no botão "**Mostrar todos no mapa**".

![Tabela de veículos do cliente](/images/clientes/registrar-veiculo-cliente/01.webp)

---

## Acompanhamento do Veículo

Abaixo da tabela, a seção acompanhamento do veículo apresenta um mapa interativo que exibe a localização atual do veículo selecionado anteriormente. Esse recurso permite uma visualização clara da posição do veículo em tempo real.

![Mapa de acompanhamento do veículo](/images/clientes/registrar-veiculo-cliente/02.webp)

### Detalhes do veículo
No canto superior direito do mapa, você encontrará o "**botão detalhes**". Ao clicar neste botão, uma caixa se expande, fornecendo informações adicionais sobre o veículo, como *ignição*, *corte*, *alimentação*, *sinal GPS*, *velocidade* , *v. alimentação*, *data/hora rastreador* e *data/hora servidor*.

![Gif de ações do veículo](/images/clientes/registrar-veiculo-cliente/04.gif)

Além disso, é disponível várias opções para gerenciar o veículo:

- **Bloqueio e Desbloqueio**: Permite bloquear ou desbloquear o veículo do cliente.
- **Comandos**: Acesso a uma lista de comandos específicos para comunicação com o veículo.
- **Histórico**: Abre uma nova página com o histórico, contendo todos os pontos registrados pelo rastreador em relação ao veículo.


### Histórico do veículo
Ao clicar no "**botão histórico**" na tela de detalhes do mapa, você será direcionado para uma nova página que apresenta uma tabela detalhada com o histórico do veículo selecionado. Esta tabela inclui informações relevantes, como o *status da ligação*, o *status das coordenadas no GPS*, a *velocidade do veículo em km/h*, além das *datas* e *horas da conexão* e do *GPS*.

![Seção de histórico](/images/clientes/registrar-veiculo-cliente/05.webp)

---

## Informações do Veículo

Nesta seção, você pode visualizar e editar todos os detalhes referente ao veículo selecionado anteriormente na tabela da primeira seção.

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
    url: "#acompanhamento-do-veículo",
    subLinks: [{
      title: "Detalhes do veículo",
      url: "#detalhes-do-veículo",
    }, {
      title: "Histórico do veículo",
      url: "#histórico-do-veículo"
    }]
  },
  {
    title: "Informações do veículo",
    url: "#informações-do-veículo",
  },
  {
    title: "Funcionalidades adicionais",
    url: "#funcionalidades-adicionais",
    subLinks: [{
      title: "Edição de dados do veículo",
      url: "#edição-de-dados-do-veículo"
    }]
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