const userRouter = require("express").Router();
const getUser = require("../controllers/userController");
const postUser = require("../controllers/userController");
userRouter.get("/post",getUser);
userRouter.post("/post",postUser);

module.exports = userRouter;