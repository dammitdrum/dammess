import '@babel/polyfill'
import Vue from 'vue'
import VueResource from 'vue-resource'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
