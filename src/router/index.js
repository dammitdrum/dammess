import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/components/User/Singin'
import Signup from '@/components/User/Singup'
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
      component: Signin,
      beforeEnter: AuthGuard
    },
    {
      path: '/registration',
      name: 'Signup',
      component: Signup,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
