<template>
  <v-list three-line class="chats-list">
    <template v-for="(item, index) in chats">
      <v-subheader
        v-if="item.header"
        :key="item.header"
      >
        {{ item.header }}
      </v-subheader>

      <v-divider
        v-else-if="item.divider"
        :inset="item.inset"
        :key="index"
      ></v-divider>

      <v-list-tile
        v-else
        :key="index"
        avatar
        ripple
        @click="selectChat(item, $event)"
        :value="item.active"
      >
        <v-list-tile-avatar :class="{ 'multi-avatar': item.avatars.length > 1 }">
          <img v-for="(avatar, idx) in item.avatars" :src="avatar" :key="idx" v-if="idx <= 4">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-badge v-model="item.newCount" color="blue">
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
            <span slot="badge">{{item.newCount}}</span>
          </v-badge>
          <v-list-tile-sub-title>
            <span v-if="item.lastName">
              <span class='text--primary' v-html="item.lastName"></span> &mdash;
            </span>
            <span v-html="item.lastText"></span>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'ChatsList',
  created () {
    // this.$store.dispatch('loadChats')
  },
  computed: {
    chats () {
      let chats = []
      let currentChat = this.$store.getters.currentChat
      let chatsData = _.sortBy(this.$store.getters.chats, chat => {
        let lastMessage = chat.messages[chat.messages.length - 1]

        if (!lastMessage) {
          return true
        }

        return moment().valueOf() - moment(lastMessage.creation_date, 'YYYY-MM-DD HH:mm:ss').valueOf()
      })

      _.each(chatsData, (chatData, i) => {
        let avatars = _.map(chatData.users, user => user.avatar)
        let chatName = chatData.name
        let lastMessage = chatData.messages[chatData.messages.length - 1]
        let lastName = lastMessage && (chatsData.length > 2) ? lastMessage.name : ''
        let lastText = lastMessage ? lastMessage.text : ''

        if (chatData.users.length === 2) {
          let secondUser = _.filter(chatData.users, user => user.id !== this.$store.getters.user.id)[0]

          chatName = secondUser.name
          avatars = [secondUser.avatar]
        }

        chats.push({
          id: chatData.chat_id,
          name: chatName,
          avatars,
          lastName,
          lastText,
          newCount: 0,
          active: currentChat && currentChat.chat_id === chatData.chat_id
        })

        if (i !== chatsData.length - 1) {
          chats.push({ divider: true, inset: true })
        }
      })

      return chats
    }
  },
  methods: {
    selectChat (chat, event) {
      this.$store.commit('setCurrentChat', chat.id)
    }
  }
}
</script>

<style lang="scss">
  .chats-list {
    .v-badge__badge {
      font-size: 12px;
    }
    .v-list__tile__sub-title {
      -webkit-box-orient: vertical;
    }
    .multi-avatar .v-avatar {
      margin-left: -8px;
    }
    .v-avatar {
      display: block;
      img {
        margin-right: -34px;
        float: left;
        border: 2px solid #fff;
      }
    }
    .v-list__tile__content {
      padding-top: 14px;
      justify-content: end;
    }
    .v-list__tile--active {
      background: #eaf3ff !important;
    }
  }
</style>
