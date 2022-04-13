const {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCart,
  getMonthlyIncome,
} = require("../controllers/cartController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../verifyToken");

const cartRouter = require("express").Router();

cartRouter.get("/", verifyTokenAndAdmin, getAllCart);
cartRouter.post("/", verifyToken, createCart);
cartRouter.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);
cartRouter.put("/:id", verifyTokenAndAuthorization, updateCart);
cartRouter.delete("/:id", verifyTokenAndAuthorization, deleteCart);

module.exports = cartRouter;

