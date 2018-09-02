const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const chatSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  creation_date: {
    type: Date,
    default: Date.now
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  photo: {
    type: String,
    required: false
  },
  multi: {
    type: Number,
    default: 0
  },
  users: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    }
  ],
  messages: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        required: true
      },
      is_read: {
        type: Number,
        default: 0
      }
    }
  ]
});

//songSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Chat', chatSchema);