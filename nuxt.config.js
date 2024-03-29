export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-netlify-functions-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'author', content: 'Lucid – wearelucid.ch' },
    ],
  },

  target: 'static',

  components: true,

  /*
   ** CSS
   */
  css: ['normalize.css', 'element-ui/lib/theme-chalk/index.css'],

  /*
   ** Plugins
   */
  plugins: [{ src: '~/plugins/element-ui.js' }],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  /*
   ** Modules
   */
  modules: ['@nuxtjs/axios'],

  /*
   ** Axios config
   */
  axios: {
    baseURL: '/',
  },

  /*
   ** Build configuration
   */
}
