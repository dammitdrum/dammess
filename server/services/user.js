const Joi = require('joi');
const bcrypt = require('bcryptjs');

module.exports = {
  encryptPassword(palinText) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(palinText, salt);
  },
  comparePassword(plainText, encrypedPassword) {
    return bcrypt.compareSync(plainText, encrypedPassword);
  },
  validateSignup(body) {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    });
    const { value, error } = Joi.validate(body, schema);

    if (error && error.details) {
      return { error };
    }

    return { value };
  },
  validateLogin(body) {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required(),
    });
    const { value, error } = Joi.validate(body, schema);

    if (error && error.details) {
      return { error };
    }

    return { value };
  },
};