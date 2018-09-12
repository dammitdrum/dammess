<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Registration form</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip top>
                <v-btn slot="activator" icon large @click="toLogin">
                  <v-icon large>account_circle</v-icon>
                </v-btn>
                <span>To login</span>
              </v-tooltip>
            </v-toolbar>
            <app-alert v-if="error" @dismissed="onDismissed" :text="error.name"></app-alert>
            <v-card-text>
              <v-form>
                <v-text-field
                  id="email"
                  prepend-icon="email"
                  name="email"
                  label="Email"
                  type="text"
                  v-model="email"
                  required></v-text-field>
                <v-text-field
                  prepend-icon="person"
                  name="username"
                  label="Username"
                  id="username"
                  v-model="username"
                  type="text"
                  required></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="password"
                  required></v-text-field>
                <v-text-field
                  name="confirmPassword"
                  label="Confirm Password"
                  prepend-icon="lock"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  :rules="[comparePasswords]"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="onSignup" :loading="loading">Register</v-btn>
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
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match.' : true
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSignup () {
      this.$store.dispatch('signUserUp', {
        email: this.email,
        name: this.username,
        password: this.password
      })
    },
    toLogin () {
      this.$router.push('/login')
    },
    onDismissed () {
      this.$store.commit('clearError')
    }
  }
}
</script>

<style lang="scss">

</style>
