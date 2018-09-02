import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'Signin',
      component: Home
    }
  ],
  mode: 'history'
})
