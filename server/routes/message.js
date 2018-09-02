const express = require('express');
const passport = require('passport');
const messageController = require('../controllers/message');
const { checkMiddleware } = require('../middleware/check');

const messageRouter = express.Router();

const policy = [passport.authenticate('jwt', { session: false }), checkMiddleware];

messageRouter.route('/')
  .get(checkMiddleware, messageController.findAll)
  .post(checkMiddleware, messageController.create);

messageRouter.route('/:id')
  .put(checkMiddleware, messageController.update)
  .delete(checkMiddleware, messageController.delete);

module.exports = messageRouter;