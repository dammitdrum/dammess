const AuthModule = {
  state: {
    user: {
      id: '1233211233223',
      login: 'firstUser',
      registration_date: '2018-08-27 13:27:51',
      name: 'John Doe',
      avatar: 'https://api.adorable.io/avatars/50/1233211233223.png'
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    user (state) {
      return state.user
    }
  }
}

export default AuthModule
