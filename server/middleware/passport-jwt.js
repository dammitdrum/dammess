const Passport = require('passport');
const PassportJWT = require('passport-jwt');
const { getConfig } = require('../config/config');
const User = require('../models/user');

const config = getConfig(process.env.NODE_ENV);

const configJWTStrategy = () => {
  const opts = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret,
  };
  Passport.use(
    new PassportJWT.Strategy(opts, (payload, done) => {
      User.findOne({ _id: payload.id }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    })
  );
};

module.exports = { configJWTStrategy };