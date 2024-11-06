import {
  AwardIcon,
  BoltIcon,
  CarIcon,
  CpuIcon,
  HandCoinsIcon,
  HeadsetIcon,
  PackageIcon,
  PercentIcon,
  ReceiptIcon,
  SettingsIcon,
  ShoppingBasketIcon,
  UsersIcon,
  WrenchIcon
} from 'lucide-react'

export const NAV_ITEMS = [
  // {
  //   title: 'Pendências',
  //   path: '/pendencias',
  //   icon: ClipboardListIcon,
  //   subLinks: [
  //     {
  //       title: 'Sub-título de Pendências 1',
  //       path: '/',
  //     },
  //     {
  //       title: 'Sub-título de Pendências 2',
  //       path: '/',
  //     },
  //   ],
  // },
  {
    title: 'Vendas',
    path: '/vendas',
    icon: ShoppingBasketIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de vendas',
        path: '/vendas/introducao',
      },
      {
        title: 'Criar orçamento de pedido',
        path: '/vendas/novo-orcamento',
      },
      {
        title: 'Agendar instalação do pedido',
        path: '/vendas/agendar-instalacao',
      },
      {
        title: 'Iniciar separação do pedido',
        path: '/vendas/iniciar-separacao',
      },
      {
        title: 'Gerar recebimento do pedido',
        path: '/vendas/gerar-recebimento',
      },
      {
        title: 'Gerar contrato do pedido',
        path: '/vendas/gerar-contrato',
      },
      {
        title: 'Testar equipamento',
        path: '/vendas/testar-equipamento',
      },
      {
        title: 'Consultar pedidos de venda',
        path: '/vendas/consultar-pedidos',
      },
    ],
  },
  // {
  //   title: 'CRM',
  //   path: '/crm',
  //   icon: MessagesSquareIcon,
  //   subLinks: [
  //     {
  //       title: 'Agenda',
  //       path: '/',
  //     },
  //     {
  //       title: 'Etapas',
  //       path: '/',
  //     },
  //     {
  //       title: 'Funil',
  //       path: '/',
  //     },
  //     {
  //       title: 'Origem',
  //       path: '/',
  //     },
  //     {
  //       title: 'Leads',
  //       path: '/',
  //     },
  //   ],
  // },
  {
    title: 'Clientes',
    path: '/clientes/',
    icon: UsersIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de cliente',
        path: '/clientes/introducao',
      },
      {
        title: 'Criar um cliente',
        path: '/clientes/novo-cliente',
      },
      {
        title: 'Registrar o veículo do cliente',
        path: '/clientes/registrar-veiculo-cliente',
      },
      {
        title: 'Analisar o financeiro do cliente',
        path: '/clientes/financeiro',
      },
      {
        title: 'Consultar os serviços com o cliente',
        path: '/clientes/consultar-servicos-cliente'
      },
      {
        title: 'Consultar clientes',
        path: '/clientes/consultar-clientes'
      }
    ],
  },
  {
    title: 'Fornecedores',
    path: '/fornecedores/pesquisa',
    icon: PackageIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de Fornecedores',
        path: '/fornecedores/introducao',
      },
      {
        title: 'Registrar um fornecedor',
        path: '/fornecedores/novo-fornecedor',
      },
      {
        title: 'Analisar o financeiro do fornecedor',
        path: '/fornecedores/financeiro',
      },
      {
        title: 'Consultar fornecedores',
        path: '/fornecedores/consultar-fornecedores',
      },
    ],
  },
  {
    title: 'Técnicos',
    path: '/tecnicos',
    icon: WrenchIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de técnicos',
        path: '/tecnicos/introducao',
      },
      {
        title: 'Registrar um técnico',
        path: '/tecnicos/novo-tecnico',
      },
      {
        title: 'Registrar um tipo de serviço',
        path: '/tecnicos/novo-tipo-servico',
      },
      {
        title: 'Consultar técnicos',
        path: '/tecnicos/consultar-tecnicos',
      },
    ],
  },
  {
    title: 'Planos',
    path: '/planos',
    icon: AwardIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de planos',
        path: '/planos/introducao',
      },
      {
        title: 'Registrar um plano',
        path: '/planos/novo-plano',
      },
      {
        title: 'Consultar planos',
        path: '/planos/consultar',
      },
    ],
  },
  {
    title: 'Equipamento',
    path: '/equipamento',
    icon: BoltIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de equipamento',
        path: '/equipamento/introducao'
      },
      {
        title: 'Registrar equipamento',
        path: '/equipamento/novo-equipamento'
      },
      {
        title: 'Registrar equipamentos em massa',
        path: '/equipamento/novo-equipamento-multiplos'
      },
      {
        title: 'Consultar equipamentos',
        path: '/equipamento/consultar'
      },
    ]
  },
  {
    title: 'Chip',
    path: '/chip',
    icon: CpuIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de equipamento',
        path: '/equipamento/introducao'
      },
      {
        title: 'Registrar equipamento',
        path: '/equipamento/novo-equipamento'
      },
      {
        title: 'Consultar equipamentos',
        path: '/equipamento/consultar'
      },
    ]
  },
  {
    title: 'Veículos',
    path: '/veiculos',
    icon: CarIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de veículos',
        path: '/veiculos/introducao',
      },
      {
        title: 'Registrar um veículo',
        path: '/veiculos/novo-veiculo',
      },
      {
        title: 'Consultar veículos',
        path: '/veiculos/consultar-veiculos',
      },
    ],
  },
  {
    title: 'Financeiro',
    path: '/financeiro',
    icon: HandCoinsIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo do financeiro',
        path: '/financeiro/introducao',
      },
      {
        title: 'Registrar lançamento (Contas a pagar)',
        path: '/financeiro/contas-a-pagar/registrar-lancamento',
      },
      {
        title: 'Consultar contas a pagar',
        path: '/financeiro/contas-a-pagar/consultar',
      },
      {
        title: 'Efetuar cobrança (Contas a receber)',
        path: '/financeiro/contas-a-receber/registrar-cobranca',
      },
      {
        title: 'Consultar contas a receber',
        path: '/financeiro/contas-a-receber/consultar',
      },
    ],
  },
  {
    title: 'Comissão',
    path: '/comissao',
    icon: PercentIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de comissões',
        path: '/comissao/introducao',
      },
      {
        title: 'Registrar uma nova comissão',
        path: '/comissao/nova-comissao',
      },
      {
        title: 'Consultar comissões',
        path: '/comissao/consultar',
      },
    ],
  },
  {
    title: 'Nota Fiscal',
    path: '/nota-fiscal',
    icon: ReceiptIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de nota fiscal',
        path: '/nota-fiscal/introducao',
      },
      {
        title: 'Registrar nota fiscal',
        path: '/nota-fiscal/nova-nota-fiscal',
      },
      {
        title: 'Consultar notas fiscais',
        path: '/nota-fiscal/consultar',
      },
    ],
  },
  {
    title: 'Suporte',
    path: '/suporte',
    icon: HeadsetIcon,
    subLinks: [
      {
        title: 'Introdução ao fluxo de suporte',
        path: '/suporte/introducao',
      },
      {
        title: 'Registrar novo atendimento',
        path: '/suporte/novo-atendimento'
      },
      {
        title: 'Consultar atendimentos',
        path: '/suporte/consultar'
      }
    ],
  },
  // {
  //   title: 'Bi',
  //   path: '/bi',
  //   icon: PieChartIcon,
  //   subLinks: [
  //     {
  //       title: 'Dashboard',
  //       path: '/',
  //     },
  //     {
  //       title: 'Configurar',
  //       path: '/',
  //     },
  //     {
  //       title: 'Financeiro',
  //       path: '/financeiro',
  //       icon: HandCoinsIcon,
  //       subLinks: [
  //         {
  //           title: 'A receber',
  //           path: '/financeiro/contas-a-receber',
  //         },
  //         {
  //           title: 'A pagar',
  //           path: '/financeiro/contas-a-pagar',
  //         },
  //         {
  //           title: 'Recebimento',
  //           path: '/financeiro/recebimento',
  //         },
  //         {
  //           title: 'Cobrança',
  //           path: '/',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: 'Configurações',
    path: '/configuracoes',
    icon: SettingsIcon,
    subLinks: [
      {
        title: 'Cadastro da Empresa',
        path: '/',
      },
      {
        title: 'Notas Fiscais',
        path: '/',
      },
      {
        title: 'Integrações',
        path: '/',
      },
      {
        title: 'Backup de Dados',
        path: '/',
      },
      {
        title: 'Importaçoes de Dados',
        path: '/',
      },
      {
        title: 'Certificado Digital',
        path: '/',
      },
      {
        title: 'Contadores',
        path: '/',
      },
    ],
  },
]
