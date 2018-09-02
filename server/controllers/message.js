const Joi = require('joi');
const Message = require('../models/message');

module.exports = {
  async create(req, res) {
    try {
      const schema = Joi.object().keys({});
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const message = await Message.create({});

      return res.json(message);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async findAll(req, res) {
    try {
      const messages = await Message.find({});

      return res.json(messages);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const message = await Message.findOneAndRemove({ _id: id });

      if (!message) {
        return res.status(404).json({ err: 'could not find message' });
      }

      return res.json(message);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const schema = Joi.object().keys({});
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const message = await Message.findOneAndUpdate({ _id: id }, value, { new: true });

      if (!message) {
        return res.status(404).json({ err: 'could not find message' });
      }

      return res.json(message);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};