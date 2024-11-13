const mongoose = require("mongoose");

const orderScheme = new mongoose.Schema({
  cartItems: Array,
  amount: String,
  status: String,
  createdAt: Date,
});

const orderModel = mongoose.model("order", orderScheme);

module.exports = orderModel;
