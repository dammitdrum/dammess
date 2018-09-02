const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  registration_date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  contacts: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      name: {
        type: String,
        required: false,
      }
    }
  ],
  chats: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true
      }
    }
  ],
  unread_messages: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);