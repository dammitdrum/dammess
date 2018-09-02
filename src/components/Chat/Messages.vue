<template>
  <div class="messages-list">
    <div class="message" v-for="(message, index) in data" :key="index" v-if="data.length">
      <div class="divider" v-if="message.dateDivider">{{message.dateDivider}}</div>
      <div class="wrap" v-else>
        <div class="avatar">
          <v-avatar slot="activator" size="50px">
            <img :src="message.avatar" alt="Avatar"/>
          </v-avatar>
        </div>
        <div class="name_content">
          <div class="name font-weight-medium">{{message.userName}}</div>
          <div class="content body-1" v-html="message.content"></div>
        </div>
        <div class="time">{{message.time}}</div>
      </div>
    </div>
    <div class="empty" v-else>No messages here yet</div>
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'Messages',
  props: {
    'chatData': Object
  },
  computed: {
    data () {
      let messages = []
      let chatData = this.chatData

      if (!chatData.messages.length) {
        return []
      }

      let currentDay = moment(chatData.messages[0].creation_date, 'YYYY-MM-DD HH:mm:ss')

      _.each(chatData.messages, (message, i) => {
        let creationDate = moment(message.creation_date, 'YYYY-MM-DD HH:mm:ss')
        let userData = _.find(chatData.users, user => user.id === message.user_id)
        let isSameDay = creationDate.date() === currentDay.date() && creationDate.diff(currentDay, 'days') === 0

        if (!isSameDay || i === 0) {
          let dateDivider = creationDate.format('DD MMMM')

          if (moment().diff(creationDate, 'days') === 0) {
            dateDivider = 'Today'
          }

          messages.push({
            dateDivider: dateDivider
          })
        }

        messages.push({
          avatar: userData.avatar,
          userName: userData.name,
          content: message.text,
          time: creationDate.format('HH:mm')
        })

        currentDay = creationDate
      })

      return messages
    }
  }
}
</script>

<style scoped lang="scss">
  .messages-list {
    width: 100%;
  }
  .message {
    position: relative;
    margin-bottom: 20px;
    .avatar {
      float: left;
    }
    .name_content {
      padding: 0 40px 0 60px;
    }
    .name {
      color: royalblue;
    }
    .time {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 12px;
      color: #777;
    }
    .divider {
      text-align: center;
      color: #777;
      padding: 10px 0;
    }
    &::after {
      content: '';
      clear: both;
      display: table;
    }
  }
</style>
