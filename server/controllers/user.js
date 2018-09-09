const userService = require('../services/user');
const User = require('../models/user');
const jwt = require('../services/jwt');

module.exports = {
  async signup(req, res) {
    try {
      const { value, error } = userService.validateSignup(req.body);
      if (error) {
        return res.status(400).json(error);
      }
      const encryptedPass = userService.encryptPassword(value.password);
      const avatar = userService.createAvatar(value.email);

      const user = await User.create({
        email: value.email,
        name: value.name,
        password: encryptedPass,
        avatar
      });
      const token = jwt.issue({ id: user._id }, '1d');
      return res.json({ token, user });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async login(req, res) {
    try {
      const { value, error } = userService.validateLogin(req.body);
      if (error) {
        return res.status(400).json(error);
      }
      const user = await User.findOne({ email: value.email });
      if (!user) {
        return res.status(401).json({ name: 'Wrong email or password!' });
      }
      const authenticted = userService.comparePassword(value.password, user.password);
      if (!authenticted) {
        return res.status(401).json({ err: 'unauthorized' });
      }
      const token = jwt.issue({ id: user._id }, '1d');
      return res.json({ token, user });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async contacts(req, res) {
    try {
      const contacts = await User.findContacts({});

      return res.json(contacts);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  authenticate(req, res) {
    return res.json(req.user);
  },
};