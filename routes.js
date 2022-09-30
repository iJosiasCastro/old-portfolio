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
            path: '/works',
            component: resolve(__dirname, 'views/work/index.vue')
        },
        {
            name: 'works.show',
            path: '/works/:slug',
            component: resolve(__dirname, 'views/work/show.vue')
        },
        {
            name: 'contact',
            path: '/contact',
            component: resolve(__dirname, 'views/contact.vue')
        },
        // Spanish
        {
            name: 'es.home',
            path: '/es',
            component: resolve(__dirname, 'views/home.vue')
        },
        {
            name: 'es.works.index',
            path: '/es/trabajos',
            component: resolve(__dirname, 'views/work/index.vue')
        },
        {
            name: 'es.works.show',
            path: '/es/trabajos/:slug',
            component: resolve(__dirname, 'views/work/show.vue')
        },
        {
            name: 'es.contact',
            path: '/es/contacto',
            component: resolve(__dirname, 'views/contact.vue')
        },
      ]
    }
}