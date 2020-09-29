import Vue from 'vue';
import VueRouter from 'vue-router';
import Anasayfa from '../views/Anasayfa.vue';
const menuler = () =>
    import ('@/views/menuler.vue');
const sepet = () =>
    import ('@/views/sepet.vue');
const urun = () =>
    import ('@/views/urun.vue');
const bosmasa = () =>
    import ('@/views/bosMasa.vue');


import state from '@/store';

Vue.use(VueRouter);
const routes = [{
        path: '/not-found',
        name: 'bosMasa',
        component: bosmasa,
    },
    {
        path: '/masa-:masa/:kategori',
        name: 'menuler',
        component: menuler,
        beforeEnter: async(to, from, next) => {
            if (MasaVarMi(to.params.masa)) {
                return next()
            }
            next('not-found')
        }
    },
    {
        path: '/sepet',
        name: 'sepet',
        component: sepet
    },
    {
        path: '/masa-:masa/:kategori/:urun',
        name: 'urun',
        component: urun,
        beforeEnter: async(to, from, next) => {
            if (MasaVarMi(to.params.masa)) {
                return next()
            }
            next('not-found')
        }
    },
    {
        path: '/masa-:masa',
        name: 'Anasayfa',
        component: Anasayfa,
        beforeEnter: (to, from, next) => {
            if (MasaVarMi(to.params.masa))
                return next()
            next('not-found')
        }
    },
    {
        path: '/',
        name: 'Empty',
        redirect: '/masa-1'
    },
];

function MasaVarMi(masa) {
    state.state.Masa = state.state.Organization.tables.find(x => x.No == masa)
    if (!state.state.Masa)
        return false
    return true
}

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes });


import supportsWebP from 'supports-webp';
router.beforeEach((to, from, next) => {
    if (!state.state.webpSupport) {
        supportsWebP.then(supported => {
            if (supported) {
                state.state.webpSupport = 'webp'
            } else {
                state.state.webpSupport = 'jpg'
            }
        });
    }

    NProgress.start()
    NProgress.set(0.1)
    let subdomain = ''
    if (process.env.NODE_ENV == "development") {
        subdomain = 'demo'
    } else {
        subdomain = window.location.host.split('.')[0]
    }
    // const subdomain = window.location.host.split('.')[0]
    state.state.Subdomain = subdomain

    if (!state.state.Organization) {
        state.dispatch('FetchIsletme', () => {
            next()
        })
    } else {
        next()
    }
})

router.afterEach(() => {
    setTimeout(() => NProgress.done(), 100)
})

export default router;