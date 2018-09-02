const express = require('express');
const chatRouter = require('./chat');
const userRouter = require('./user');
const messageRouter = require('./message');

const restRouter = express.Router();

restRouter.use('/chats', chatRouter);
restRouter.use('/user', userRouter);
restRouter.use('/messages', messageRouter);

module.exports = restRouter;