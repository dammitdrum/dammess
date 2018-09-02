import Vue from 'vue'
import Vuex from 'vuex'

import AuthModule from './AuthModule'
import ChatsModule from './ChatsModule'
import ContactsModule from './ContanctsModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth: AuthModule,
    chats: ChatsModule,
    contacts: ContactsModule
  },
  state: {
    sidebarToggle: true
  },
  getters: {
    sidebarToggle (state) {
      return state.sidebarToggle
    }
  },
  mutations: {
    toggleSidebar (state) {
      state.sidebarToggle = !state.sidebarToggle
    }
  },
  actions: {

  }
})
