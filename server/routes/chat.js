const express = require('express');
const passport = require('passport');
const chatController = require('../controllers/chat');
const { checkMiddleware } = require('../middleware/check');

const chatRouter = express.Router();

const policy = [passport.authenticate('jwt', { session: false }), checkMiddleware];

chatRouter.route('/')
  .get(passport.authenticate('jwt', { session: false }), chatController.findAll)
  .post(passport.authenticate('jwt', { session: false }), chatController.create);

chatRouter.route('/:id')
  .put(passport.authenticate('jwt', { session: false }), chatController.update)
  .delete(passport.authenticate('jwt', { session: false }), chatController.delete);

module.exports = chatRouter;