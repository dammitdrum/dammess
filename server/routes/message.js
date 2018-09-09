const express = require('express');
const passport = require('passport');
const messageController = require('../controllers/message');
const { checkMiddleware } = require('../middleware/check');

const messageRouter = express.Router();

const policy = [passport.authenticate('jwt', { session: false }), checkMiddleware];

messageRouter.route('/')
  .get(passport.authenticate('jwt', { session: false }), messageController.findAll)
  .post(passport.authenticate('jwt', { session: false }), messageController.create);

messageRouter.route('/:id')
  .put(passport.authenticate('jwt', { session: false }), messageController.update)
  .delete(passport.authenticate('jwt', { session: false }), messageController.delete);

module.exports = messageRouter;