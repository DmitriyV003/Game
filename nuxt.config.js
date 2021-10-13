module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    telemetry: false,
    debug: true,
    // devtools: true,
    // dev: true,
    // vue: {
    //   config: {
    //     productionTip: false,
    //     devtools: true
    //   }
    // },
    head: {
        title: process.env.npm_package_name || '',
        htmlAttrs: {
            lang: 'ru'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
            }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        'vue-material-design-icons/styles.css',
        'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
        'vue-slick-carousel/dist/vue-slick-carousel.css',
        'vue-slider-component/dist-css/vue-slider-component.css',
        'vue-slider-component/theme/default.css',
        '@mdi/font/css/materialdesignicons.min.css',
        '@/theme/main.sass',
        '@/theme/_mix.sass',
        '@/theme/_vars.sass'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/vue-slick',
        '@/plugins/vue-range-slider',
        '@/plugins/event-bus',
        { src: '@/plugins/rating', ssr: false },
        '@/plugins/axios',
        '@/plugins/vuelidate',
        { src: '@/plugins/g-toast', ssr: false }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        ['cookie-universal-nuxt', { alias: 'cookiz' }],

    ],
    bootstrapVue: {
        componentPlugins: [
            'LayoutPlugin',
            'ToastPlugin'
        ]
    },
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: 'https://api.gameincome.com/api'
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
