import requestService from '../services/httpRequest'

const UserModule = {
  state: {
    user: null,
    isAuth: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAuth (state, payload) {
      if (payload) {
        state.isAuth = true
        if (payload.token) {
          window.localStorage.setItem('jwt_token', payload.token)
        }
      } else {
        state.isAuth = false
        window.localStorage.removeItem('jwt_token')
      }
    }
  },
  actions: {
    authUser ({commit}) {
      commit('setLoading', true)
      return requestService.get('/api/user/me')
        .then(user => {
          commit('setLoading', false)
          commit('setUser', user)
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
      requestService.post('/api/user/login', payload)
        .then(data => {
          commit('setLoading', false)
          commit('setUser', data.user)
          commit('setAuth', data)
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
      requestService.post('/api/user/singup', payload)
        .then(data => {
          commit('setLoading', false)
          commit('setUser', data.user)
          commit('setAuth', data)
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
