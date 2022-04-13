const {
  createOrder,
  updateOrder,
  getAllOrders,
  deleteOrder,
  getUserOrders,
} = require("../controllers/orderController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../verifyToken");

const orderRouter = require("express").Router();

orderRouter.post("/", verifyToken, createOrder);
orderRouter.put("/:id", verifyTokenAndAdmin, updateOrder);
orderRouter.delete("/:id", verifyTokenAndAdmin, deleteOrder);
orderRouter.get("/find/:userId", verifyTokenAndAuthorization, getUserOrders);
orderRouter.get("/", verifyTokenAndAdmin, getAllOrders);

module.exports = orderRouter;
