<template>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="toggleSidebar"></v-toolbar-side-icon>
    <v-toolbar-title>Messenger</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu bottom transition="slide-y-transition" offset-y>
      <v-btn
        slot="activator" dark icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-list>
        <v-list-tile @click="logout">
          <v-list-tile-title>
            <v-icon>exit_to_app</v-icon>
            Logout
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    toggleSidebar () {
      this.$store.commit('toggleSidebar')
    },
    logout () {
      this.$store.commit('setAuth', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
