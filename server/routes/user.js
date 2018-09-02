const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);
userRouter.get('/me', passport.authenticate('jwt', { session: false }), userController.authenticate);

module.exports = userRouter;