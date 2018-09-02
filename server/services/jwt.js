const jwt = require('jsonwebtoken');
const { getConfig } = require('../config/config');

const config = getConfig(process.env.NODE_ENV);

module.exports = {
  issue(payload, expiresIn) {
    return jwt.sign(payload, config.secret, {
      expiresIn,
    });
  },
};