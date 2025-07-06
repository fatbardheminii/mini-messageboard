const Router = require('express').Router;

const messageRouter = Router();

const messages = [
  {
    text: "Hi therre",
    user: "John",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Jake",
    added: new Date(),
  },
  {
    text: "Good Morning",
    user: "Jane",
    added: new Date(),
  },
];

messageRouter.get('/', (req, res) => {
    res.render('index', {title: "Mini message board", messages: messages});
})