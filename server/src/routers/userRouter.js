const userRouter = require("express").Router();
const {
  putUser,
  deleteUser,
  getUser,
  getAllUser,
  getStats,
} = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../verifyToken");

userRouter.get("/", verifyTokenAndAdmin, getAllUser);
userRouter.get("/stats", verifyTokenAndAdmin, getStats);
userRouter.get("/find/:id", verifyTokenAndAuthorization, getUser);
userRouter.put("/:id", verifyTokenAndAuthorization, putUser);
userRouter.delete("/:id", verifyTokenAndAuthorization, deleteUser);

module.exports = userRouter;
