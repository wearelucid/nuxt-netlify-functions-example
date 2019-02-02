module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-netlify-functions-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'author', content: 'Lucid – wearelucid.ch' }
    ]
  },

  /*
  ** CSS
  */
  css: ['@/assets/css/main.scss'],

  /*
  ** Modules
  */
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],

  /*
  ** Axios config
  */
  axios: {
    baseURL: '/'
  },

  /*
  ** Proxy config
  */
  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
      /*
      ** Run ESLINT on save
      */
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
