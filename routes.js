export default {
    extendRoutes(routes, resolve) {
      return [
        // English
        {
            name: 'home',
            path: '/',
            component: resolve(__dirname, 'views/home.vue')
        },
        {
            name: 'works.index',
            path: '/trabajos',
            component: resolve(__dirname, 'views/work/index.vue')
        },
        {
            name: 'works.show',
            path: '/trabajos/:slug',
            component: resolve(__dirname, 'views/work/show.vue')
        },
        {
            name: 'contact',
            path: '/contacto',
            component: resolve(__dirname, 'views/contact.vue')
        },
        // Spanish
        {
            name: 'en.home',
            path: '/en',
            component: resolve(__dirname, 'views/home.vue')
        },
        {
            name: 'en.works.index',
            path: '/en/works',
            component: resolve(__dirname, 'views/work/index.vue')
        },
        {
            name: 'en.works.show',
            path: '/en/works/:slug',
            component: resolve(__dirname, 'views/work/show.vue')
        },
        {
            name: 'en.contact',
            path: '/en/contact',
            component: resolve(__dirname, 'views/contact.vue')
        },
        {
            path: '*',
            redirect: '/',
        },
      ]
    }
}