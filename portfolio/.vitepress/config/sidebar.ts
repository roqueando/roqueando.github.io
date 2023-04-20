import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Works',
      items: [
        { text: 'PHP Intern Developer', link: '/en/webdec' },
        { text: 'NodeJS Junior Developer', link: '/en/bossabox-kotaki' },
        { text: 'Mid PHP Developer', link: '/en/netshowme' },
        { text: 'Senior Elixir Developer', link: '/en/idopterlabs' },
        { text: 'Senior NodeJS Developer', link: '/en/bossabox-totalpass' },
        { text: 'Senior Elixir Developer', link: '/en/zubale' },
      ],
    },
    {
      text: "Personal Projects",
      items: [
        { text: "Oluwoye", link: '/en/oluwoye' }
      ]
    }
  ],
  '/pt-BR/': [
    {
      text: 'Trajetória',
      items: [
        { text: 'Estágiario PHP', link: '/pt-BR/webdec' },
        { text: 'Desenvolvedor Junior NodeJS', link: '/pt-BR/bossabox-kotaki' },
        { text: 'Desenvolvedor Pleno PHP', link: '/pt-BR/netshowme' },
        { text: 'Desenvolvedor Sênior Elixir', link: '/pt-BR/idopterlabs' },
        { text: 'Desenvolvedor Sênior NodeJS', link: '/pt-BR/bossabox-totalpass' },
        { text: 'Desenvolvedor Sênior Elixir', link: '/pt-BR/zubale' },
      ],
    },
    {
      text: "Projetos Pessoais",
      items: [
        { text: "Oluwoye", link: '/pt-BR/oluwoye' }
      ]
    }
  ],
}
