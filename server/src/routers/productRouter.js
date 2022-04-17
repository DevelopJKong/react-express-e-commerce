const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
} = require("../controllers/productController");
const { verifyTokenAndAdmin } = require("../verifyToken");
const productRouter = require("express").Router();

productRouter.get("/", getAllProduct);
productRouter.post("/", verifyTokenAndAdmin, createProduct);
productRouter.get("/find/:id", getProduct);
productRouter.put("/:id", verifyTokenAndAdmin, updateProduct);
productRouter.delete("/:id", verifyTokenAndAdmin, deleteProduct);

module.exports = productRouter;
