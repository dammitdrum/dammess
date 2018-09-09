<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <p align-center justify-center>authorization...</p>
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="green"
              ></v-progress-circular>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  created () {
    this.authUser()
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    async authUser () {
      try {
        await this.$store.dispatch('authUser')
      } finally {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss">

</style>
