import axios from 'axios'

const UserModule = {
  state: {
    user: null,
    isAuth: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAuth (state, payload) {
      state.isAuth = payload
    }
  },
  actions: {
    authUser ({commit}) {
      commit('setLoading', true)
      return axios.get('/api/user/me')
        .then(response => {
          commit('setLoading', false)
          commit('setUser', response.data)
          commit('setAuth', true)
        })
        .catch(error => {
          commit('setLoading', false)
          console.log(error)
        })
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      axios.post('/api/user/login', payload)
        .then(response => {
          commit('setLoading', false)
          commit('setUser', response.data.user)
          commit('setAuth', response.data)
        })
        .catch(error => {
          commit('setLoading', false)
          console.log(error)
          commit('setError', error)
        })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      axios.post('/api/user/singup', payload)
        .then(response => {
          commit('setLoading', false)
          commit('setUser', response.data.user)
          commit('setAuth', response.data)
        })
        .catch(error => {
          commit('setLoading', false)
          console.log(error)
          commit('setError', error)
        })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuth (state) {
      return state.isAuth
    },
    contacts (state) {
      let contacts = []

      if (state.user) {
        contacts = state.user.contacts
      }
      return contacts
    }
  }
}

export default UserModule
