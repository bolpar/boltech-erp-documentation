export const NOVO_EQUIPAMENTOS_MULTIPLOS_MARKDOWN = `
## Cadastro em Massa de Equipamentos

O **cadastro em massa de equipamentos** permite registrar diversos dispositivos de forma rápida e eficiente, sem a necessidade de preencher um por um. Para realizar essa operação, basta enviar um arquivo PDF com uma formatação específica, conforme o modelo descrito abaixo.

---

## Formato das Colunas

O arquivo PDF deve conter as seguintes colunas, com as informações essenciais de cada equipamento:

![Formatos das colunas](/images/equipamento/novo-equipamento-multiplos/01.webp)

---

## Formatos Aceitos para Cada Coluna

1. **Número (IMEI)**: Apenas números.
2. **Protocolo**: Texto livre.
3. **Modelos de Rastreador Aceitos**: \`[ET01]\`, \`[MT09]\`, \`[TK905]\`, \`[E3]\`, \`[LT02]\`, \`[ESINO]\`, \`[LT03]\`, \`[LT08]\`, \`[GT08S]\`, \`[J16]\`
4. **Data de Compra**: Formato de data: \`dia/mês/ano\` (exemplo: \`15/08/2023\`).
5. **Situação**: Um dos seguintes estados: \`[sem_chip]\`, \`[consignacao]\`, \`[ativo]\`, \`[cancelado]\`, \`[garantia]\`, \`[testado]\`, \`[em_estoque]\`, \`[ag_instalacao]\`, \`[extraviado]\`
6. **Bateria**: Status da bateria, sendo: \`[sim]\`, \`[nao]\`
7. **Observações**: Texto livre para quaisquer notas adicionais.

---

## Como Enviar o Arquivo

1. **Prepare o arquivo** de acordo com o modelo de colunas e formatos descritos.
2. **Clique no botão "Enviar Arquivo"** para carregar o PDF com os dados dos equipamentos.
3. **Selecione a opção "Cadastro em Massa"** para processar o envio e registrar todos os equipamentos de uma vez no sistema.

![Enviar arquivo](/images/equipamento/novo-equipamento-multiplos/02.webp)

---

## Vantagens do Cadastro em Massa

Este fluxo simplificado permite que você:

- **Cadastre rapidamente grandes volumes de equipamentos**.
- **Garanta padronização** e consistência nos dados inseridos no sistema.
- **Otimize a gestão e acompanhamento** dos equipamentos registrados.

---

Essa abordagem facilita o trabalho de inclusão e mantém o processo de registro organizado, evitando erros e agilizando a administração do inventário.

`

export const NOVO_EQUIPAMENTOS_MULTIPLOS_SUMMARY = [
  {
    title: "Formato das colunas",
    url: "#formato-das-colunas"
  },
  {
    title: "Formatos aceitos para cada coluna",
    url: "#formatos-aceitos-para-cada-coluna"
  },
  {
    title: "Como enviar o arquivo",
    url: "#como-enviar-o-arquivo"
  },
  {
    title: "Vantagens do cadastro em massa",
    url: "#vantagens-do-cadastro-em-massa"
  },
]

export const NOVO_EQUIPAMENTOS_MULTIPLOS_ACTIONS = {
  previous: {
    title: "",
    url: ""
  },
  next: {
    title: "Criar cliente",
    url: "/clientes/novo-cliente"
  }
}