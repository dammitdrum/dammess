<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <div v-if="loading" class="text-xs-center">
            <v-progress-circular :size="70" :width="7" color="red" indeterminate></v-progress-circular>
          </div>
          <v-card v-else class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip top>
                <v-btn slot="activator" icon large @click="toRegistration">
                  <v-icon large>account_circle</v-icon>
                </v-btn>
                <span>To registration</span>
              </v-tooltip>
            </v-toolbar>
            <app-alert v-if="error" @dismissed="onDismissed" :text="error.name"></app-alert>
            <v-card-text>
              <v-form>
                <v-text-field
                  id="email"
                  prepend-icon="person"
                  name="email"
                  label="Email"
                  type="text"
                  v-model="email"
                  required></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="password"
                  required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="onSignin">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
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
    onSignin () {
      this.$store.dispatch('signUserIn', {
        email: this.email,
        password: this.password
      })
    },
    toRegistration () {
      this.$router.push('/registration')
    },
    onDismissed () {
      this.$store.commit('clearError')
    }
  }
}
</script>

<style lang="scss">

</style>
