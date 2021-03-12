export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'naks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // CSS file in the project
    // '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/app.config.js',
    '~/plugins/axios',
    '~/plugins/api',
    { src: '~/plugins/aos', mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  /*
   ** Runtime Config
   */
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.VUE_APP_API_URL ? process.env.VUE_APP_API_URL : 'http://localhost:8000'
    }
  },

  privateRuntimeConfig: {
    axios: {
      // baseURL: process.env.VUE_APP_API_URL ? process.env.VUE_APP_API_URL : 'http://localhost:8000'
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL: process.env.VUE_APP_API_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
