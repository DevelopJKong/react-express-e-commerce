const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
} = require("../controllers/productController");
const { verifyTokenAndAdmin } = require("../verifyToken");
const productRouter = require("express").Router();

productRouter.post("/", verifyTokenAndAdmin, createProduct);
productRouter.put("/:id", verifyTokenAndAdmin, updateProduct);
productRouter.delete("/:id", verifyTokenAndAdmin, deleteProduct);
productRouter.get("/find/:id", getProduct);
productRouter.get("/", getAllProduct);

module.exports = productRouter;
