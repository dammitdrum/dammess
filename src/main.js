import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store'

import AlertComponent from './components/Common/Alert.vue'

Vue.config.productionTip = false

Vue.component('app-alert', AlertComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
