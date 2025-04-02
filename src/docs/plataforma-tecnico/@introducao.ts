export const PLATAFORMA_TECNICO_MARKDOWN = `
# Plataforma Técnico Boltech: Funcionalidades e Integração com o ERP  

O aplicativo técnico da Boltech foi criado para resolver problemas críticos nas instalações de rastreadores, garantindo padronização, precisão e integração imediata com o sistema ERP. Ele elimina processos manuais, reduz erros e conecta o trabalho dos técnicos diretamente ao núcleo operacional da empresa.  

---
![Tela 1 Entregador](/images/plataforma-tecnico/galeria.webp) 

## Gestão unificada de ordens de serviço  
Os técnicos acessam todas as informações necessárias em um único lugar: dados do cliente, histórico de serviços, especificações do veículo (placa, BT, modelo) e status financeiro. Isso evita consultas demoradas a sistemas separados ou documentos físicos, garantindo que o trabalho comece com informações verificadas e atualizadas.  

---

## Checklist digital obrigatório  
Durante a instalação, o técnico deve registrar fotos da placa do veículo, posicionamento do rastreador e componentes elétricos (fusíveis e relés). Essas evidências são vinculadas à ordem de serviço no ERP, permitindo auditoria remota e transparência para o cliente. A falta de qualquer item bloqueia a conclusão do serviço, assegurando padrões mínimos de qualidade.  

---

## Testes de comunicação integrados
Antes de finalizar, o aplicativo testa automaticamente a conexão do rastreador com a rede Boltech. O técnico insere placa e código BT para verificar transmissão de dados, localização e integridade do sinal. Problemas são detectados no local, evitando revisitas e garantindo que o cliente receba um dispositivo funcional.  

---

## Acesso contextual a manuais técnicos  
Ao cadastrar um modelo de rastreador (como GTOSS ou ET01/MT09), o aplicativo exibe automaticamente o manual correspondente. Técnicos não precisam buscar documentos em pastas físicas ou memorizar procedimentos, reduzindo erros em configurações complexas.  

---

![Tela 2 Entregador](/images/plataforma-tecnico/galeria-2.webp) 

## Sincronização automática com o ERP  
Toda conclusão de serviço atualiza o sistema central em tempo real:  
- Fotos e observações são anexadas ao registro do cliente  
- A equipe financeira recebe alertas para emissão de cobrança  
- Dados técnicos são enviados à plataforma de rastreamento  
Isso elimina retrabalho administrativo e garante que todas as áreas trabalhem com informações consistentes.  

---

**Por que isso importa?**  
O aplicativo técnico não é apenas uma ferramenta operacional, mas um sistema de garantia. Ele assegura que cada instalação siga padrões rigorosos, conecta equipes de campo ao escritório e transforma dados brutos em informações acionáveis para o ERP. O resultado é um fluxo de trabalho mais rápido, clientes mais confiantes e uma operação que funciona como um único organismo integrado.  
`

export const PLATAFORMA_TECNICO_SUMMARY = [
  {
    title: "Gestão unificada de ordens de serviço",
    url: "#gestão-unificada-de-ordens-de-serviço"
  },
  {
    title: "Checklist digital obrigatório",
    url: "#checklist-digital-obrigatório",
  },
  {
    title: "Testes de comunicação integrados",
    url: "#testes-de-comunicação-integrados",
  },
  {
    title: "Acesso contextual a manuais técnicos",
    url: "#acesso-contextual-a-manuais-técnicos",
  },
  {
    title: "Sincronização automática com o ERP",
    url: "#sincronização-automática-com-o-erp",
  },
]

export const PLATAFORMA_TECNICO_ACTIONS = {
  previous: {
    title: "Sobre a Boltech",
    url: "/sobre-boltech"
  },
  next: {
    title: "Plataforma Rastreamento",
    url: "/plataforma-rastreamento"
  }
}