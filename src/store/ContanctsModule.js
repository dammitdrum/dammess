import requestService from '../services/httpRequest'

const ContactsModule = {
  state: {
    contacts: []
  },
  getters: {
    contacts (state) {
      return state.contacts
    }
  },
  mutations: {
    setContacts (state, payload) {
      state.contacts = payload
    }
  },
  actions: {
    loadContacts ({ commit, getters }) {
      return requestService.get('/api/user/me')
        .then(contacts => {
          commit('setContacts', contacts)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

export default ContactsModule
