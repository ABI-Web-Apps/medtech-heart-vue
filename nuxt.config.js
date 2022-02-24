import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    //titleTemplate: '%s - medtech-heart-vue',
    title: 'MedTechHeart',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        "data-dojo-config":"async: 1, dojoBlankHtmlUrl: '/blank.html'",
        /*"packages":[
          {
            'name': 'js',
            'location':  location.pathname.replace(/\/[^/]+$/, '') + '/js'
          }
        ],*/
        src:'//ajax.googleapis.com/ajax/libs/dojo/1.11.2/dojo/dojo.js',
      },
      {
        hid: 'chartMaker',
        type:'text/javascript',
        src:'js/LVPandECG.js',
      },
      {
        type: 'text/javascript',
        src: 'zincJS/three.min.js'
      },
      {
        type: 'text/javascript',
        src: 'zincJS/zinc_3js_renderer.js'
      },
      {
        type: 'text/javascript',
        src: 'zincJS/zinc_threejs_control.js'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/global.scss',
    '@/assets/sass/base.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/topics",
    "@/plugins/current-content"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components/about",
      "~/components/model",
      "~/components/navigation",
      "~/components/topics"
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/sass/variables.scss'],
    treeShake: true,
    theme: {
      options: { customProperties: true },
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: "#7d1e7d",
          info: colors.teal.lighten1,
          warning:"#827717",    
          error: "#DD2C00",
          success: "#558B2F"

        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/i,
        use: "raw-loader",
      })
    },
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    }
  },

  target: 'static',

  generate: {
    routes: [
      '/model-heart',
      '/attack-healthy',
      '/attack-minor',
      '/attack-severe',
      '/electricity-healthy',
      '/electricity-fibrillation',
      '/failure-healthy',
      '/failure-compensated',
      '/failure-decompensated'
    ]
  }
}
