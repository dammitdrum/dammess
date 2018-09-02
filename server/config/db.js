const mongoose = require('mongoose');
const { getConfig } = require('./config');

const config = getConfig(process.env.NODE_ENV);

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', function (err) {
  console.log('connection error:', err.message);
})
db.once('open', function callback () {
  console.log("Connected to DB!");
})

const connect = () => mongoose.connect(config.MONGO_URI);

module.exports = { connect };

