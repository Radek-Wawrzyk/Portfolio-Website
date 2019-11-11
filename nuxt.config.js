
export default {
  mode: 'universal',
  head: {
    title:' Radek Wawrzyk - Front End Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,900&amp;subset=latin-ext' },
    ]
  },
  loading: { color: '#fff' },
  css: [
    './styles/main.scss',
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],
  styleResources: {
    scss: [
      './styles/components/variables.scss',
    ],
  },
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  }
}
