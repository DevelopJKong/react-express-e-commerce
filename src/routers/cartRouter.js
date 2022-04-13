const {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCart,
  getMonthlyIncome,
} = require("../controllers/cartController");

const cartRouter = require("express").Router();

cartRouter.post("/", verifyToken, createCart);
cartRouter.put("/:id", verifyTokenAndAuthorization, updateCart);
cartRouter.delete("/:id", verifyTokenAndAuthorization, deleteCart);
cartRouter.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);
cartRouter.get("/", verifyTokenAndAdmin, getAllCart);
cartRouter.get("/income",verifyTokenAndAdmin,getMonthlyIncome);
