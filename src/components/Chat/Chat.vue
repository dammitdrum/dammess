<template>
  <div>
    <toolbar></toolbar>
    <div v-if="chatData">
      <v-content class="chat-detail" v-on:scroll="onScroll" ref="chatContainer">
        <messages class="chat-detail_messages" :chatData="chatData"></messages>
      </v-content>
      <v-textarea
        v-model="messageText"
        class="creator"
        :class="{ long: !sidebarToggle }"
        rows="1"
        color="indigo"
        box
        label="Label"
        auto-grow
        placeholder="type message">
      </v-textarea>
      <v-fab-transition>
        <v-btn class="creator-btn" v-show="showCreateButton" color="pink" dark fixed bottom right fab>
          <v-icon>send</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
    <v-content class="no-select-chat" v-else>
      <v-container fluid fill-height>
        <div>Select chat to start messages</div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Toolbar from '@/components/Chat/Toolbar'
import Messages from '@/components/Chat/Messages'

export default {
  name: 'Chat',
  components: {
    'toolbar': Toolbar,
    'messages': Messages
  },
  data () {
    return {
      showCreateButton: false,
      messageText: ''
    }
  },
  updated () {
    this.scrollToBottom()
  },
  computed: {
    chatData () {
      return this.$store.getters.currentChat
    },
    sidebarToggle () {
      return this.$store.getters.sidebarToggle
    }
  },
  watch: {
    messageText: function (newValue, oldValue) {
      this.showCreateButton = !!newValue.trim()
    }
  },
  methods: {
    onScroll () {
      console.log('onScroll')
    },
    scrollToBottom () {
      this.$nextTick(() => {
        var container = this.$el.querySelector('.chat-detail')

        if (!container) {
          return
        }

        container.scrollTop = container.scrollHeight
      })
    }
  }
}
</script>

<style lang="scss">
  .chat-detail {
    overflow-y: scroll;
    height: calc(100% - 122px);
    width: 100%;
    position: fixed;
    top: 64px;
    left: 0px;
    padding-top: 0 !important;
  }
  .chat-detail_messages {
    padding: 20px 20px 0px;
  }
  .creator {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-left: 400px;
    left: 0;
    transition: padding-left .2s cubic-bezier(.4,0,.2,1);
    &.long {
      padding-left: 0;
    }
    .v-input__slot {
      background: #eee !important;
      border-radius: 0;
      margin-bottom: 1px;
    }
    .v-text-field__details {
      display: none;
    }
  }
  .creator-btn {
    bottom: 30px !important;
  }
</style>
