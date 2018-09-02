const express = require('express');
const passport = require('passport');
const chatController = require('../controllers/chat');
const { checkMiddleware } = require('../middleware/check');

const chatRouter = express.Router();

const policy = [passport.authenticate('jwt', { session: false }), checkMiddleware];

chatRouter.route('/')
  .get(checkMiddleware, chatController.findAll)
  .post(checkMiddleware, chatController.create);

chatRouter.route('/:id')
  .put(checkMiddleware, chatController.update)
  .delete(checkMiddleware, chatController.delete);

module.exports = chatRouter;