import { Project } from '@/@types/Project'
import * as Icon from '@/utils/iconsPath'
// i[magePath: 'assets/projects/api-image-generic.png'],

export const projectsList: Project[] = [
  {
    title: 'Portfólio',
    description: 'Meu portfólio como desenvolvedor front-end.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'shadcn/ui',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'Framer Motion',
        iconPath: Icon.framerMotionIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Radix UI',
        iconPath: Icon.radixIconPath,
      },
      {
        name: 'Responsividade',
        iconPath: Icon.responsiveIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/my-portfolio',
    deploy: 'https://portfolio-guilherme-viana.vercel.app',
    imagesPath: ['assets/projects/portfolio.png'],
  },
  {
    title: 'Console Revamp',
    description: 'Um console para operações internas de uma equipe de um servidor de Roleplay.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'shadcn/ui',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'Responsividade',
        iconPath: Icon.responsiveIconPath,
      },
    ],
    repository: '',
    deploy: 'https://console-revamp-two.vercel.app',
    imagesPath: ['assets/projects/consol-revamp.png'],
  },
  {
    title: 'Boilerplate SaaS Next + Node ',
    description:
      'Boilerplate setup de um multi-tenant SaaS, com RBAC, autorização e etc feito em Next (v15, R19) + Node (Monorepo).',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'Node.js',
        iconPath: Icon.nodejsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'Turborepo',
        iconPath: Icon.turborepoIconPath,
      },
      {
        name: 'Docker',
        iconPath: Icon.dockerIconPath,
      },
      {
        name: 'Ky',
        iconPath: Icon.kyIconPath,
      },
      {
        name: 'Fastify',
        iconPath: Icon.fastifyIconPath,
      },
      {
        name: 'Prisma',
        iconPath: Icon.prismaIconPath,
      },
      {
        name: 'TanStack Query',
        iconPath: Icon.reactQueryIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'shadcn/ui',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'Swagger',
        iconPath: Icon.swaggerIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/next-saas-rbac',
    deploy: 'https://next-saas-rbac-web.vercel.app',
    imagesPath: [
      'assets/projects/saas-rbac-3.png',
      'assets/projects/saas-rbac-1.png',
      'assets/projects/saas-rbac-2.png',
    ],
  },
  {
    title: 'Template SaaS',
    description:
      'Projeto boilerplate de microserviços SaaS. Sistemas de gerenciamento de notas com um plano de inscrição, tema configurável e mais.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Prisma',
        iconPath: Icon.prismaIconPath,
      },
      {
        name: 'PostgreSQL',
        iconPath: Icon.postgreSqlIconPath,
      },
      {
        name: 'Tailwind CSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Shadcn UI',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },

      {
        name: 'Responsividade',
        iconPath: Icon.responsiveIconPath,
      },
    ],
    repository: '',
    deploy: 'https://guibzo-sass-project.vercel.app',
    imagesPath: ['assets/projects/bozo-sass.png'],
  },
  {
    title: 'Thoughts',
    description: 'Um projeto pessoal de um blog simples e moderno full-stack. (Em desenvolvimento)',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'shadcn/ui',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'Aceternity UI',
        iconPath: Icon.aceternityUiIconPath,
      },
      {
        name: 'Kinde Auth',
        iconPath: Icon.kindeAuthIconPath,
      },
      {
        name: 'Prisma',
        iconPath: Icon.prismaIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'TanStack Query',
        iconPath: Icon.reactQueryIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Responsividade',
        iconPath: Icon.responsiveIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/thoughts',
    deploy: '',
    imagesPath: ['assets/projects/thoughts.png'],
  },

  {
    title: 'Chama no Var',
    description:
      'Um challenge de recriar e adaptar uma página inspirada na landing page da Varsel Agency.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'shadcn/ui',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'Aceternity UI',
        iconPath: Icon.aceternityUiIconPath,
      },
      {
        name: 'Framer Motion',
        iconPath: Icon.framerMotionIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'React Hook Form',
        iconPath: Icon.reactHookFormIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Responsividade',
        iconPath: Icon.responsiveIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/chama-no-var',
    deploy: 'https://chama-no-var.vercel.app/',
    imagesPath: ['assets/projects/chama-no-var.png', 'assets/projects/chama-no-var-2.png'],
  },
  {
    title: 'Space Gym',
    description:
      'Um projeto voltado para academia e musculação. Conta com listagem de exercícios com imagens, vídeos e gifs, histórico de exercícios, perfís próprios, etc.',
    technologies: [
      {
        name: 'React Native',
        iconPath: Icon.reactNativeIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'Expo',
        iconPath: Icon.expoIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
      {
        name: 'RN Reusables',
        iconPath: Icon.rnReusablesIconPath,
      },
      {
        name: 'Native Wind',
        iconPath: Icon.nativeWindIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/space-gym',
    deploy: '',
    imagesPath: ['assets/projects/space-gym-1.png'],
  },
  {
    title: 'Easy Transfer',
    description:
      'Freelance de uma landing page com contato sob demanda feito para empresa Easy Transfer. (Deploy de preview não integrado)',
    technologies: [
      {
        name: 'React',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'shadcn/ui',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'React Router Dom',
        iconPath: Icon.reactRouterDomIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'React Hook Form',
        iconPath: Icon.reactHookFormIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: '',
    deploy: 'https://easy-transfer.vercel.app/',
    imagesPath: ['assets/projects/easy-transfer-2.png', 'assets/projects/easy-transfer.png'],
  },
  {
    title: 'Constancy',
    description: 'Um app de metas pessoais.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'shadcn/ui',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/constancy-app',
    deploy: '',
    imagesPath: ['assets/projects/constancy-1.png', 'assets/projects/constancy-2.png'],
  },
  {
    title: 'Constancy API',
    description: 'API do app de metas pessoais (Constancy).',
    technologies: [
      {
        name: 'Node.js',
        iconPath: Icon.nodejsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'Fastify',
        iconPath: Icon.fastifyIconPath,
      },
      {
        name: 'Drizzle ORM',
        iconPath: Icon.drizzleORMIconPath,
      },
      {
        name: 'PostgreSQL',
        iconPath: Icon.postgreSqlIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/constancy-api',
    deploy: '',
    imagesPath: ['assets/projects/api-image-generic.png'],
  },

  {
    title: 'Ignite Teams',
    description: 'App voltado para gerenciamento de grupos e times.',
    technologies: [
      {
        name: 'React Native',
        iconPath: Icon.reactNativeIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'Expo',
        iconPath: Icon.expoIconPath,
      },
      {
        name: 'Native Wind',
        iconPath: Icon.nativeWindIconPath,
      },
      {
        name: 'RN Reusables',
        iconPath: Icon.rnReusablesIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/ignite-teams',
    deploy: '',
    imagesPath: ['assets/projects/ignite-teams.png'],
  },
  {
    title: 'Bookwise',
    description: 'Uma plataforma para avaliação de livros. Challenge de uma aplicação full-stack.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Next Auth',
        iconPath: Icon.authJsIconPath,
      },
      {
        name: 'Prisma',
        iconPath: Icon.prismaIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'TanStack Query',
        iconPath: Icon.reactQueryIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Responsividade',
        iconPath: Icon.responsiveIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/bookwise',
    deploy: '',
    imagesPath: ['assets/projects/bookwise.png'],
  },
  {
    title: 'Gespol',
    description: 'Sistema de gerenciamento policial para internos da corporação.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/gespol-system',
    deploy: 'https://gespol-system.vercel.app',
    imagesPath: ['assets/projects/gespol.png'],
  },
  {
    title: 'Hells Angels MW',
    description:
      'Um site de apresentação para um grupo fictício de um determinado servidor de um jogo em roleplay.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'Responsividade',
        iconPath: Icon.responsiveIconPath,
      },
    ],
    repository: '',
    deploy: 'https://81mc-rocket.vercel.app',
    imagesPath: ['assets/projects/hamc.png'],
  },
  {
    title: 'Pizza Shop',
    description:
      'Uma loja de pizzas com tabela de pedidos, manipulação de status dos pedidos, gráficos da loja e mais.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Tailwind CSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Shadcn UI',
        iconPath: Icon.shadcnIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
      {
        name: 'TanStack Query',
        iconPath: Icon.reactQueryIconPath,
      },
      {
        name: 'Vitest',
        iconPath: Icon.vitestIconPath,
      },
      {
        name: 'Playwright',
        iconPath: Icon.playwrightIconPath,
      },
      {
        name: 'Responsividade',
        iconPath: Icon.responsiveIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/pizza-shop',
    deploy: '',
    imagesPath: ['assets/projects/pizza-shop.png'],
  },

  {
    title: 'Course Player',
    description:
      'Um video player para vídeos de algum curso. Feito com Redux, Zustand e outros conceitos avançados.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'Redux',
        iconPath: Icon.reduxIconPath,
      },
      {
        name: 'Zustand',
        iconPath: Icon.zustandIconPath,
      },
      {
        name: 'Radix UI',
        iconPath: Icon.radixIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/course-video-player',
    deploy: '',
    imagesPath: ['assets/projects/coursePlayer.png'],
  },
  {
    title: 'GitHub Blog',
    description:
      'Projeto focado em exibir as issues de um repositório do GitHub em formato de blog. Construído consumindo a GitHub API.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/github-blog',
    deploy: 'https://github-blog-guibzo.vercel.app',
    imagesPath: ['assets/projects/githubBlog2.png'],
  },
  {
    title: 'Diet API',
    description: 'Challenge de criação de uma API para gerenciamento de dietas.',
    technologies: [
      {
        name: 'Node.js',
        iconPath: Icon.nodejsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'Fastify',
        iconPath: Icon.fastifyIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/diet-api',
    deploy: '',
    imagesPath: ['assets/projects/api-image-generic.png'],
  },
  {
    title: 'Coffee Delivery',
    description:
      'Projeto de uma loja de cafés virtual, desde a seleção do café até o checkout e a confirmação do pedido.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/coffee-delivery',
    deploy: 'https://coffee-delivery-iota-nine.vercel.app',
    imagesPath: ['assets/projects/coffeeDelivery.png'],
  },
  {
    title: 'Design System',
    description:
      'Um design system com padrão de elementos, cores, tipografia, etc. Criado usando Storybook.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'Storybook',
        iconPath: Icon.storybookIconPath,
      },
      {
        name: 'Radix UI',
        iconPath: Icon.radixIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Stitches',
        iconPath: Icon.stitchesIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/design-system',
    deploy: '',
    imagesPath: ['assets/projects/storybook project.png'],
  },
  {
    title: 'Tabela de transações',
    description: 'Um challenge simples de criação de uma tabela com transações.',
    technologies: [
      {
        name: 'Nex.tjs',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/challenge-nextjs',
    deploy: '',
    imagesPath: ['assets/projects/challenge-transactions.png'],
  },
  {
    title: 'Ignite Call',
    description:
      'Sistema de agendamentos integrado com o Google Calendar para prestadores de serviços.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'Radix UI',
        iconPath: Icon.radixIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Tailwind CSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Prisma',
        iconPath: Icon.prismaIconPath,
      },
      {
        name: 'PostgreSQL',
        iconPath: Icon.postgreSqlIconPath,
      },
      {
        name: 'TanStack Query',
        iconPath: Icon.reactQueryIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
      {
        name: 'Next Auth',
        iconPath: Icon.authJsIconPath,
      },
      {
        name: 'React Hook Form',
        iconPath: Icon.reactHookFormIconPath,
      },
      {
        name: 'Zod',
        iconPath: Icon.zodIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/ignite-call',
    deploy: '',
    imagesPath: ['assets/projects/ignite-call.png'],
  },
  {
    title: 'Rocket Notes API',
    description:
      'Back-end em Node da aplicação Rocket Notes. Abrange fluxo de autenticação e armazenamento em banco de notas, usuários e suas configurações.',
    technologies: [
      {
        name: 'Node.js',
        iconPath: Icon.nodejsIconPath,
      },
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'SQLite',
        iconPath: Icon.sqliteIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/rocket-notes-api',
    deploy: '',
    imagesPath: ['assets/projects/api-image-generic.png'],
  },
  {
    title: 'Rocket Notes',
    description:
      'Projeto de uma plataforma de anotações, com perfis individuais, manipulação das anotações, etc.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'Axios',
        iconPath: Icon.axiosIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/rocket-notes',
    deploy: 'https://main--genuine-youtiao-3dd2d1.netlify.app',
    imagesPath: ['assets/projects/rocketNotes.png'],
  },
  {
    title: 'Pomodoro',
    description: 'Um timer em estilo Pomodoro, com histórico.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/pomodoro',
    deploy: 'https://pomodoro-timer-seven-ochre.vercel.app',
    imagesPath: ['assets/projects/pomodoro.png'],
  },
  {
    title: 'devstore',
    description:
      'Um mini e-commerce de roupas. Projeto atualmente superficial e sem integração de pagamentos.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Tailwind CSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
      {
        name: 'Cypress',
        iconPath: Icon.cypressIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/devstore',
    deploy: 'https://devstore-nu.vercel.app',
    imagesPath: ['assets/projects/devstore.png'],
  },
  {
    title: 'Expert Notes',
    description: 'Uma aplicação de manipulação de notas com opção de Text-to-Speech.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/expert-notes',
    deploy: '',
    imagesPath: ['assets/projects/expert-notes.png'],
  },
  {
    title: 'Polls API',
    description:
      'Back-end de um sistema de enquetes. Permite a votação em opções de enquetes e consulta dos votos.',
    technologies: [
      {
        name: 'Node.js',
        iconPath: Icon.nodejsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'Prisma',
        iconPath: Icon.prismaIconPath,
      },
      {
        name: 'PostgreSQL',
        iconPath: Icon.postgreSqlIconPath,
      },
      {
        name: 'Redis',
        iconPath: Icon.redisIconPath,
      },
      {
        name: 'Docker',
        iconPath: Icon.dockerIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/polls',
    deploy: '',
    imagesPath: ['assets/projects/api-image-generic.png'],
  },
  {
    title: 'Ignite Feed',
    description: 'Um projeto de uma rede social, com feed e perfis individuais.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/ignite-feed',
    deploy: '',
    imagesPath: ['assets/projects/igniteFeed.png'],
  },
  {
    title: 'Ignite Shop',
    description:
      'Projeto de um E-Commerce de roupas, com integração ao Stripe, página de checkout e confirmação de compra.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Stitches',
        iconPath: Icon.stitchesIconPath,
      },
      {
        name: 'GitHub',
        iconPath: Icon.githubIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/ignite-shop',
    deploy: 'https://ignite-shop-three-snowy.vercel.app',
    imagesPath: ['assets/projects/igniteShop.png'],
  },
  {
    title: 'DT Money',
    description: 'Um banco de transações, com histórico de operações.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/dt-money',
    deploy: '',
    imagesPath: ['assets/projects/dtMoney.png'],
  },
  {
    title: 'Pizza Shop',
    description: 'Uma loja de pizzas virtual, com carrinho e seleção de pizzas.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/pizza-store',
    deploy: '',
    imagesPath: ['assets/projects/pizzas.png'],
  },
  {
    title: 'BMI Calculator',
    description:
      'Um calculador de IMC, onde permite o usuário inserir a altura e o peso e indica um resultado com feedback.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/bmi-calculator',
    deploy: '',
    imagesPath: ['assets/projects/bmiCalculator.png'],
  },
  {
    title: 'Cardastro',
    description: 'Um painel de cadastro de veículos, com processo de CRUD completo.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/car-store',
    deploy: '',
    imagesPath: ['assets/projects/cardastro.png'],
  },
  {
    title: 'Dev Memory',
    description:
      'Um jogo da memória com diferentes cards e sempre com rodadas e posições aleatórias.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/memory-game',
    deploy: '',
    imagesPath: ['assets/projects/devmemory.png'],
  },
  {
    title: 'To-do List',
    description:
      'Uma lista em formato "to-do", com suas tarefas. Permite adicionar novas tarefas, marcar atuais como concluídas, etc.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'Styled Components',
        iconPath: Icon.styledComponentsIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/c-todo-list',
    deploy: '',
    imagesPath: ['assets/projects/todoList.png'],
  },
  {
    title: 'To-do List 2',
    description: 'Outro projeto de uma lista "to-do" distinto.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/todo-list',
    deploy: '',
    imagesPath: ['assets/projects/todoList2.png'],
  },
  {
    title: 'Post List',
    description: 'Uma simples lista de posts, que permite a manipulação dos posts em formato CRUD.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/post-list',
    deploy: '',
    imagesPath: ['assets/projects/postList.png'],
  },
  {
    title: 'Train Me',
    description: 'Uma landing page de uma academia.',
    technologies: [
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/train-me',
    deploy: '',
    imagesPath: ['assets/projects/trainme2.png'],
  },
  {
    title: 'Newsletter Form',
    description: 'Um interface com formulário para receber notificações de uma newsletter.',
    technologies: [
      {
        name: 'React.js',
        iconPath: Icon.reactIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/newsletter-form',
    deploy: '',
    imagesPath: ['assets/projects/newsletterForm.png'],
  },
  {
    title: 'QR Code Component',
    description: 'Uma simples interface com um QR Code.',
    technologies: [
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/qr-code',
    deploy: '',
    imagesPath: ['assets/projects/qrCodeComponent.png'],
  },
  {
    title: 'Jogo de Sorteio',
    description: 'Um jogo de sorteio extremamente simples de terminal.',
    technologies: [
      {
        name: 'Go',
        iconPath: Icon.goLangIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/first-go',
    deploy: '',
    imagesPath: ['assets/projects/terminal-go.png'],
  },
  {
    title: 'Urna Eletrônica',
    description: 'Uma urna digital falsa.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/electronic-urn',
    deploy: '',
    imagesPath: ['assets/projects/urna.png'],
  },
  {
    title: 'Login Panel',
    description: 'Interface de um painel de login (apenas visual).',
    technologies: [
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: '',
    deploy: '',
    imagesPath: ['assets/projects/loginInterface.png'],
  },
  {
    title: 'RPG Game',
    description: 'Um jogo de RPG local simples.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/fight-game',
    deploy: '',
    imagesPath: ['assets/projects/rpgGame.png'],
  },
  {
    title: 'Simple Chat',
    description: 'Um chat que permite definir o nome de usuário e enviar mensagens localmente.',
    technologies: [
      {
        name: 'Next.js',
        iconPath: Icon.nextjsIconPath,
      },
      {
        name: 'TypeScript',
        iconPath: Icon.typescriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'TailwindCSS',
        iconPath: Icon.tailwindCSSIconPath,
      },
      {
        name: 'Git',
        iconPath: Icon.gitIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/e-simple-chat',
    deploy: '',
    imagesPath: ['assets/projects/simpleChat1.png'],
  },
  {
    title: 'Clime Visualizer',
    description:
      'Um visualizador do clima, que usa uma API e permite o usuário inserir o local que deseja ver o clima.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/climate-project',
    deploy: '',
    imagesPath: ['assets/projects/clime.png'],
  },
  {
    title: 'Tic Tac Toe',
    description: 'Um jogo da velha onde os jogadores podem jogar localmente.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/tic-tac-toe',
    deploy: '',
    imagesPath: ['assets/projects/ticTacToe.png'],
  },
  {
    title: 'Canvas Screen',
    description: 'Uma tela de desenho canvas funcional.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/Canvas-Project',
    deploy: '',
    imagesPath: ['assets/projects/canvas.png'],
  },
  {
    title: 'Quiz Game',
    description:
      'Um jogo quiz, com perguntas e respostas pré-definidas e com um feedback do resultado no final do jogo.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/quiz-game',
    deploy: '',
    imagesPath: ['assets/projects/quiz.png'],
  },
  {
    title: 'Battery Play',
    description:
      'Um tocador de bateria funcional, com áudios, sequência de sons, ativação por teclado, etc.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/Drums-Project',
    deploy: '',
    imagesPath: ['assets/projects/battery.png'],
  },
  {
    title: 'Drag & Drop',
    description:
      'Um projeto de drag and drop (arrastar e soltar), que permite arrastar objetos do ponto X para o ponto Y.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: 'https://github.com/guibzo/Drag-and-Drop',
    deploy: '',
    imagesPath: ['assets/projects/dragdrop.png'],
  },
  {
    title: 'Analogical Watch',
    description: 'Um relógio analógico funcional e com ponteiros dinâmicos.',
    technologies: [
      {
        name: 'JavaScript',
        iconPath: Icon.javascriptIconPath,
      },
      {
        name: 'HTML 5',
        iconPath: Icon.htmlIconPath,
      },
      {
        name: 'CSS 3',
        iconPath: Icon.cssIconPath,
      },
    ],
    repository: '',
    deploy: '',
    imagesPath: ['assets/projects/digitalWatch.png'],
  },
]
