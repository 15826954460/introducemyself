// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import swiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
import store from './store/index'
import {i18n} from './resource/i8nconfig'
import particles from 'particles.js'
Vue.use(swiper)
Vue.use(Vuex)
Vue.use(particles)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
