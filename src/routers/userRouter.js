const userRouter = require("express").Router();
const { putUser } = require("../controllers/userController");
const { verifyTokenAndAuthorization } = require("../verifyToken");

userRouter.put("/:id", verifyTokenAndAuthorization, putUser);

module.exports = userRouter;
