<template>
  <v-app>
      <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  created () {
    this.setAuthHeader()
  },
  computed: {
    isAuth () {
      return this.$store.getters.isAuth
    }
  },
  watch: {
    isAuth (value) {
      let route = value ? '/' : '/login'

      this.setAuthHeader()
      this.$router.push(route)
    }
  },
  methods: {
    setAuthHeader () {
      let token = window.localStorage.getItem('jwt_token')

      if (token) {
        this.$http.headers.common['Authorization'] = `Bearer ${token}`
      }
    }
  }
}
</script>

<style lang="scss">

</style>
