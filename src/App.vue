<template>
  <v-app>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    text: 'tab content'
  }),
  props: {
    source: String
  }
}
</script>

<style lang="scss">

</style>
