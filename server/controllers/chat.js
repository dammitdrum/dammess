const Joi = require('joi');
const Chat = require('../models/chat');

module.exports = {
  async create(req, res) {
    try {
      const schema = Joi.object().keys({});
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const chat = await Chat.create({});

      return res.json(chat);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async findAll(req, res) {
    try {
      const chats = await Chat.find({});

      return res.json(chats);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const chat = await Chat.findOneAndRemove({ _id: id });

      if (!chat) {
        return res.status(404).json({ err: 'could not find chat' });
      }

      return res.json(chat);
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
      const chat = await Chat.findOneAndUpdate({ _id: id }, value, { new: true });

      if (!chat) {
        return res.status(404).json({ err: 'could not find chat' });
      }

      return res.json(chat);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};