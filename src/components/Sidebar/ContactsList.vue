<template>
  <v-list>
    <v-list-tile
      v-for="contact in contacts"
      :key="contact.id"
      avatar
      @click="selectContact(contact, $event)"
    >
      <v-list-tile-action>
        <v-icon v-if="contact.online" color="lime">lens</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title v-text="contact.name"></v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-avatar>
        <img :src="contact.avatar">
      </v-list-tile-avatar>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'ContactsList',
  computed: {
    contacts () {
      return this.$store.getters.contacts
    }
  },
  methods: {
    selectContact (contact, event) {
      console.log(contact, event)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
