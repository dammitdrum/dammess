import Vue from 'vue'
import Vuex from 'vuex'

import UserModule from './UserModule'
import ChatsModule from './ChatsModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: UserModule,
    chats: ChatsModule
  },
  state: {
    loading: false,
    error: null,
    sidebarToggle: true
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    sidebarToggle (state) {
      return state.sidebarToggle
    }
  },
  mutations: {
    toggleSidebar (state) {
      state.sidebarToggle = !state.sidebarToggle
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {

  }
})
