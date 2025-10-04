const { getMessages, addMessage, getMessageById } = require("../db/queries");

exports.showHome = async (req, res, next) => {
  try {
    const messages = await getMessages();
    res.render("index", { title: "Mini message board", messages });
  } catch (err) {
    next(err);
  }
};

exports.showForm = (req, res) => {
  res.render("form");
};

exports.createMessage = async (req, res, next) => {
  const { messageText, messageUser } = req.body;
  if (
    typeof messageText !== "string" ||
    typeof messageUser !== "string" ||
    !messageText.trim() ||
    !messageUser.trim() ||
    messageText.length > 255 ||
    messageUser.length > 50
  ) {
    return res.status(400).render("form", { error: "Invalid input." });
  }
  try {
    await addMessage(messageText.trim(), messageUser.trim());
    res.redirect("/");
  } catch (err) {
    next(err);
  }
};

exports.showMessage = async (req, res, next) => {
  try {
    const message = await getMessageById(req.params.id);
    if (message) {
      res.render("message", { message });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    next(err);
  }
};
