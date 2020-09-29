import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
Vue.config.productionTip = false
import store from './store'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VModal from 'vue-js-modal'
Vue.use(Loading);
Vue.use(VueCarousel);
Vue.use(VModal)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
