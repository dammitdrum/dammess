<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    this.setAuthHeader()
    this.$store.dispatch('authUser')
  },
  computed: {
    isAuth () {
      return this.$store.getters.isAuth
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    isAuth (value) {
      let route = value ? '/' : '/login'
      let token = value && value.token || ''

      if (token) {
        window.localStorage.setItem('jwt_token', token)
      }

      this.setAuthHeader()
      this.$router.push(route)
    }
  },
  methods: {
    setAuthHeader () {
      let token = window.localStorage.getItem('jwt_token')

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }
}
</script>

<style lang="scss">

</style>
