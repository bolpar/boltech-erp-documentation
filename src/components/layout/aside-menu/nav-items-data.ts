import {
  BoxesIcon,
  ClipboardListIcon,
  FileBoxIcon,
  HandCoinsIcon,
  HeadsetIcon,
  MessagesSquareIcon,
  PackageIcon,
  PieChartIcon,
  SettingsIcon,
  ShoppingBasketIcon,
  UserCog,
  UsersIcon
} from 'lucide-react'

export const NAV_ITEMS = [
  {
    title: 'Pendências',
    path: '/pendencias',
    icon: ClipboardListIcon,
    subLinks: [
      {
        title: 'Sub-título de Pendências 1',
        path: '/',
      },
      {
        title: 'Sub-título de Pendências 2',
        path: '/',
      },
    ],
  },
  {
    title: 'Vendas',
    path: '/vendas',
    icon: ShoppingBasketIcon,
    subLinks: [
      {
        title: 'Gerando um pedido',
        path: '/vendas',
      },
      {
        title: 'Agendando a instalação do pedido',
        path: '/vendas/agendando-instalacao',
      },
      {
        title: 'Iniciando a separaçado do pedido',
        path: '/vendas/iniciando-a-separacao',
      },
      {
        title: 'Iniciando a separaçado do pedido',
        path: '/vendas/iniciando-a-separacao',
      },
      {
        title: 'Gerando o recebimento do pedido',
        path: '/vendas/iniciando-a-separacao',
      },
      {
        title: 'Gerando o contrato do pedido',
        path: '/vendas/iniciando-a-separacao',
      },
      {
        title: 'Testando o equipamento',
        path: '/vendas/iniciando-a-separacao',
      },
      {
        title: 'Consultando pedidos de venda',
        path: '/vendas/iniciando-a-separacao',
      },
    ],
  },
  {
    title: 'CRM',
    path: '/crm',
    icon: MessagesSquareIcon,
    subLinks: [
      {
        title: 'Agenda',
        path: '/',
      },
      {
        title: 'Etapas',
        path: '/',
      },
      {
        title: 'Funil',
        path: '/',
      },
      {
        title: 'Origem',
        path: '/',
      },
      {
        title: 'Leads',
        path: '/',
      },
    ],
  },
  {
    title: 'Clientes',
    path: '/clientes/',
    icon: UsersIcon,
    subLinks: [
      {
        title: 'Pesquisar cliente',
        path: '/clientes/',
      },
    ],
  },
  {
    title: 'Fornecedores',
    path: '/fornecedores/pesquisa',
    icon: PackageIcon,
    subLinks: [
      {
        title: 'Procurar por Fornecedor',
        path: '/fornecedores',
      },
    ],
  },
  {
    title: 'Estoque',
    path: '/estoque',
    icon: BoxesIcon,
    subLinks: [
      {
        title: 'Equipamentos',
        path: '/equipamento',
      },
      {
        title: 'Chips',
        path: '/chip',
      },
      {
        title: 'Acessórios',
        path: '/',
      },
    ],
  },

  {
    title: 'Ordem de Serviço',
    path: '/comissao',
    icon: FileBoxIcon,
    subLinks: [
      {
        title: 'Lista de O.S',
        path: '/',
      },
      {
        title: 'Comissões',
        path: '/comissao',
      },
    ],
  },
  {
    title: 'Suporte',
    path: '/suporte',
    icon: HeadsetIcon,
    subLinks: [
      {
        title: 'Novo atendimento',
        path: '/suporte',
      },
      {
        title: 'Pendências',
        path: '/suporte/pendencias'
      }
    ],
  },
  {
    title: 'Bi',
    path: '/bi',
    icon: PieChartIcon,
    subLinks: [
      {
        title: 'Dashboard',
        path: '/',
      },
      {
        title: 'Configurar',
        path: '/',
      },
      {
        title: 'Financeiro',
        path: '/financeiro',
        icon: HandCoinsIcon,
        subLinks: [
          {
            title: 'A receber',
            path: '/financeiro/contas-a-receber',
          },
          {
            title: 'A pagar',
            path: '/financeiro/contas-a-pagar',
          },
          {
            title: 'Recebimento',
            path: '/financeiro/recebimento',
          },
          {
            title: 'Cobrança',
            path: '/',
          },
        ],
      },
    ],
  },
  {
    title: 'Administrativo',
    path: '/administrativo',
    icon: UserCog,
    subLinks: [
      {
        title: 'Comissões',
        path: '/',
      },
      {
        title: 'Contratos',
        path: '/',
      },
      {
        title: 'Planos',
        path: '/',
      },
      {
        title: 'Serviços',
        path: '/',
      },
      {
        title: 'Usuários',
        path: '/',
      },
      {
        title: 'Vendedores',
        path: '/',
      },
    ],
  },
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
