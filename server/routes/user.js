const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user');
const { checkMiddleware } = require('../middleware/check');

const userRouter = express.Router();

userRouter.route('/me')
  .get(passport.authenticate('jwt', { session: false }), userController.authenticate);

userRouter.route('/singup')
  .post(userController.signup);

userRouter.route('/login')
  .post(userController.login);

userRouter.route('/contacts')
  .post(userController.contacts);

module.exports = userRouter;