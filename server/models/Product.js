const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  colours: [
    {
      type: String,
      required: true,
    },
  ],
  sizes: [
    {
      type: String,
      required: true,
    },
  ],
  countStock: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
