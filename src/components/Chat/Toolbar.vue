<template>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="toggleSidebar"></v-toolbar-side-icon>
    <v-toolbar-title>Messenger</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    toggleSidebar () {
      this.$store.commit('toggleSidebar')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
