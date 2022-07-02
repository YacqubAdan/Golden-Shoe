const router = require("express").Router();

const {
  getAllProducts,
  getProductById,
  getLatestProducts,
} = require("../controller/productController");

router.get("/", getAllProducts);

router.get("/latest", getLatestProducts);

router.get("/:id", getProductById);

module.exports = router;
