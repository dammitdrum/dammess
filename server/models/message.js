const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const messageSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  creation_date: {
    type: Date,
    default: Date.now
  }
});

//songSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Message', messageSchema);