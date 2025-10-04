const Router = require("express").Router;
const controllers = require("../controllers/controllers");

const messageRouter = Router();

messageRouter.get("/", controllers.showHome);
messageRouter.get("/new-message", controllers.showForm);
messageRouter.post("/new-message", controllers.createMessage);
messageRouter.get("/message/:id", controllers.showMessage);

module.exports = messageRouter;
