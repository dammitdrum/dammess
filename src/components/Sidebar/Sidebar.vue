<template>
  <v-tabs color="blue" dark icons-and-text centered height="64">
    <v-tabs-slider color="red"></v-tabs-slider>

    <v-tab href="#tab-1" ripple>
      Contacts
      <v-icon>contacts</v-icon>
    </v-tab>

    <v-tab href="#tab-2" ripple>
      Messages
      <v-icon>forum</v-icon>
    </v-tab>

    <v-tab-item grow id="tab-1">
      <v-card flat>
        <contacts-list></contacts-list>
      </v-card>
    </v-tab-item>
    <v-tab-item grow id="tab-2">
      <v-card flat>
        <chats-list></chats-list>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import ContactsList from '@/components/Sidebar/ContactsList'
import ChatsList from '@/components/Sidebar/ChatsList'

export default {
  name: 'Sidebar',
  components: {
    'contacts-list': ContactsList,
    'chats-list': ChatsList
  },
  computed: {

  }
}
</script>

<style lang="scss">
  .sidebar {
    overflow-y: hidden;
    .v-tabs {
      height: 100%;
    }
    .v-tabs__items {
      overflow: scroll;
      height: calc(100% - 68px);
    }
  }
</style>
