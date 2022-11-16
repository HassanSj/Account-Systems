const express = require("express");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Models/users");
const product = require("./Models/products");
const GoogleData = require("./Models/googleoauth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const productroute = require("./Routes/ProductRoutes");
const routers = express.Router();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/accounts");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
app.post("/api/login", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});
app.post("/api/products", async (req, res) => {
  console.log(req.body);
  try {
    await product.create({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category,
      brand: req.body.brand,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate Product" });
  }
});

app.use(productroute);
app.listen(1337, () => {
  console.log("Server started on 1337");
});
