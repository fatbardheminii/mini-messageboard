const Router = require("express").Router;

const messageRouter = Router();

const messages = [
  {
    text: "Hi there",
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

messageRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini message board", messages: messages });
});

messageRouter.get("/new-message", (req, res) => {
  res.render("form");
});

messageRouter.post("/new-message", (req, res) => {
  const { messageText, messageUser } = req.body;
  const newMessage = {
    text: messageText,
    user: messageUser,
    added: new Date()
  };
  messages.push(newMessage);
  res.redirect('/');
});

messageRouter.get('/message/:id', (req, res) => {
    const id = req.params.id;
    const message = messages[id];
    if (message) {
        res.render('message', { message: message });
    } else {
        res.redirect('/');
    }
})

module.exports = messageRouter;
