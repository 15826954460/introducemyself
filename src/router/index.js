import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import test from '@/page/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
