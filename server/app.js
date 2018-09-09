const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const { connect } = require('./config/db');
const restRouter = require('./routes');
const { configJWTStrategy } = require('./middleware/passport-jwt');

const app = express();
const PORT = process.env.PORT || 4000;

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.use(passport.initialize()); // req.user

configJWTStrategy();

app.use('/api', restRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});




const mockLoginData = {
  id: '1233211233223',
  registration_date: '2018-08-27 13:27:51',
  name: 'John Doe',
  avatar: 'https://api.adorable.io/avatars/50/1233211233223.png'
};

const mockContactsData = [
  {
    id: 'secondUser',
    registration_date: '2018-08-27 14:45:51',
    name: 'Bon Jovi',
    avatar: 'https://api.adorable.io/avatars/50/12332112u332.png',
    online: 1
  },
  {
    id: 'thirdUser',
    registration_date: '2018-08-27 22:31:51',
    name: 'Serg Flames',
    avatar: 'https://api.adorable.io/avatars/50/12332112u332kll.png',
    online: 0
  }
];

const mockChatMessagesData = [
  {
    id: '1',
    text: 'hi all!',
    creation_date: '2018-08-22 15:20:13',
    user_id: 'thirdUser'
  },
  {
    id: '2',
    text: 'bla bla text, hurry up!',
    creation_date: '2018-08-23 11:54:13',
    user_id: 'firstUser'
  },
  {
    id: '3',
    text: 'long sample of text, many letter for <b>checking</b> visual part for awesome messenger of all times and peoples! ong sample of text, many letter for <b>checking</b> visual part for awesome messenger of all times and peoples! ong sample of text, many letter for <b>checking</b> visual part for awesome messenger of all times and peoples! ong sample of text, many letter for <b>checking</b> visual part for awesome messenger of all times and peoples!',
    creation_date: '2018-08-23 16:31:11',
    user_id: 'secondUser'
  },
  {
    id: '4',
    text: 'bla bla text, hurry up!',
    creation_date: '2018-08-24 21:54:13',
    user_id: 'firstUser'
  },
  {
    id: '5',
    text: 'HHH sample of text, many letter for <b>checking</b> visual part for awesome messenger of all times and peoples! ong sample of text, many letter for <b>checking</b> visual part for awesome messenger of all times and peoples! ong sample of text, many letter for <b>checking</b> visual part for awesome messenger of all times and peoples! ong sample of text, many letter for <b>checking</b> visual part for awesome messenger of all times and peoples!',
    creation_date: '2018-08-29 23:31:11',
    user_id: 'thirdUser'
  }
];

const mockChatsData = [
  {
    chat_id: '123456',
    name: '',
    creation_date: '2018-08-20 22:20:13',
    photo: '',
    users: [
      {
        id: 'firstUser',
        name: 'John Doe',
        avatar: 'https://api.adorable.io/avatars/50/1233211233223.png'
      },
      {
        id: 'secondUser',
        name: 'Bon Jovi',
        avatar: 'https://api.adorable.io/avatars/50/12332112u332.png'
      }
    ],
    messages: [
      {
        id: '6',
        text: 'hi all!',
        creation_date: '2018-08-21 15:20:13',
        user_id: 'firstUser'
      },
      {
        id: '7',
        text: 'bla bla text, hurry up!',
        creation_date: '2018-08-22 11:54:13',
        user_id: 'secondUser'
      },
    ]
  },
  {
    chat_id: '12345',
    name: 'Bla Bla Chat',
    creation_date: '2018-08-21 22:20:13',
    photo: '',
    users: [
      {
        id: 'firstUser',
        name: 'John Doe',
        avatar: 'https://api.adorable.io/avatars/50/1233211233223.png'
      },
      {
        id: 'secondUser',
        name: 'Bon Jovi',
        avatar: 'https://api.adorable.io/avatars/50/12332112u332.png'
      },
      {
        id: 'thirdUser',
        name: 'Serg Flames',
        avatar: 'https://api.adorable.io/avatars/50/12332112u332kll.png'
      }
    ],
    messages: mockChatMessagesData
  }
];


