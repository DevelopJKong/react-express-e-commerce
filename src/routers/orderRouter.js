const {
  createOrder,
  updateOrder,
  getAllOrders,
  deleteOrder,
  getUserOrders,
  getMonthlyIncome,
} = require("../controllers/orderController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../verifyToken");

const orderRouter = require("express").Router();

orderRouter.get("/", verifyTokenAndAdmin, getAllOrders);
orderRouter.post("/", verifyToken, createOrder);
orderRouter.get("/income", verifyTokenAndAdmin, getMonthlyIncome);
orderRouter.get("/find/:userId", verifyTokenAndAuthorization, getUserOrders);
orderRouter.put("/:id", verifyTokenAndAdmin, updateOrder);
orderRouter.delete("/:id", verifyTokenAndAdmin, deleteOrder);


module.exports = orderRouter;
