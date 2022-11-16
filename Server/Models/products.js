const mongoose = require("mongoose");

const Products = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
  },
  { collection: "products" }
);

const Product = mongoose.model("Products", Products);

module.exports = Product;
