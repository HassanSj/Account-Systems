const express = require("express");
const routers = express.Router();
const product = require("../Models/products");

routers.get("/products/getproduct", async (req, res) => {
  try {
    const data = await product.find();
    res.status(201).json(data);
    console.log(data);
  } catch (error) {
    res.status(422).json(error);
  }
});
routers.delete("/products/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await product.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = routers;
