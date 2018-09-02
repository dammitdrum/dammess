<template>
  <div>
    <v-navigation-drawer class="sidebar" v-model="drawer" fixed app width="400">
      <sidebar></sidebar>
    </v-navigation-drawer>
    <chat-detail></chat-detail>
  </div>
</template>

<script>
import Sidebar from './Sidebar/Sidebar.vue'
import Chat from './Chat/Chat.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  components: {
    'sidebar': Sidebar,
    'chat-detail': Chat
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.sidebarToggle
      },
      set () {}
    }
  }
}
</script>

<style lang="scss">

</style>
