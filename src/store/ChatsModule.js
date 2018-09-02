import _ from 'lodash'
import requestService from '../services/httpRequest'

const ChatsModule = {
  state: {
    chats: [],
    currentChat: null
  },
  getters: {
    chats (state) {
      return state.chats
    },
    currentChat (state) {
      return state.currentChat
    }
  },
  mutations: {
    setChats (state, payload) {
      state.chats = payload
    },
    setCurrentChat (state, payload) {
      state.currentChat = _.find(state.chats, chat => chat.id === payload)
    },
    updateChatMessages (state, { chatId, messages }) {
      state.chats = _.map(state.chats, chat => {
        if (chat.id === chatId) {
          return { ...chat, messages: messages }
        }
        return chat
      })
    }
  },
  actions: {
    loadChats ({ commit, getters }) {
      return requestService.get('/api/chats')
        .then(chats => {
          commit('setChats', chats)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

export default ChatsModule
