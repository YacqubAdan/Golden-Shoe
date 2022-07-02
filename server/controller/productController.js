const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

const getLatestProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .sort({ createdAt: "desc" })
      .limit(3);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getLatestProducts,
};
