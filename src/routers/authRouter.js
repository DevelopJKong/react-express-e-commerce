const authRouter = require("express").Router();
const register = require("../controllers/authController");
//REGISTER
authRouter.post("/register",register);

module.exports = authRouter;