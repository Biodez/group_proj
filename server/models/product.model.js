const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title of the product should be specified"],
    },
    price: {
      type: Number,
      required: [true, "price of the product should be specified"],
    },
    brand: {
      type: String,
      required: [true, "brand of the product should be specified"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity of the product should be specified"],
    },
    about: {
      type: String,
      required: [true, "about of the product should be specified"],
    },
    imageLink: {
      type: String,
      required: [true, "about of the product should be specified"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
