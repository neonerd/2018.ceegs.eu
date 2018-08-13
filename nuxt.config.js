module.exports = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || 'jtq0pyefwjr7',
    CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY || 'a9b58b8c906be17392de47b529e0bc1b62f0477efe2dc33520aeabf3d2af28bc'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'CEEGS 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-2.2.4.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-serialize-object/2.5.0/jquery.serialize-object.min.js', body: true },
    ]
  },
  css: [
    '@/assets/scss/web.scss'
  ],
  modules: [
    'bootstrap-vue/nuxt',
  ],
  plugins: [
    { src: '@/plugins/smooth-scroll.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
