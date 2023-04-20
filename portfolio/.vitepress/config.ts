import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitor Roque",
  description: "My works and goods",
  locales: {
    root: {
      label: "English",
      lang: 'en'
    },
    'pt-BR': {
      label: 'Português (Brasileiro)',
      lang: 'pt-BR',
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About me', link: '/' },
      { text: 'Works', link: '/en/webdec' }
    ],
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/roqueando' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/vitor-roque-2b3290179/' }
    ]
  }
})
