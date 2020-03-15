
export default {
  mode: 'universal',
  head: {
    title:' Radek Wawrzyk - Front End Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,900&amp;subset=latin-ext' },
      { rel: 'stylesheet', href: 'href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap&subset=latin-ext' },
    ]
  },
  loading: { color: '#fff' },
  css: [
    './styles/main.scss',
  ],
  plugins: [
    { src: '@/plugins/veeValidate' },
    { src: '@/plugins/vueCarousel', mode: 'client' },
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/config.js',
    },
  },
  styleResources: {
    scss: [
      './styles/components/variables.scss',
      './styles/components/mixins.scss',
    ],
  },
  transition: {
    name: 'fade-page-2',
  },
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  },
  router: {
    linkPrefetchedClass: 'nuxt-link',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/404/index.vue'),
      });
    },
  },
}
