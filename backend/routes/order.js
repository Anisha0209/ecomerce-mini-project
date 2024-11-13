const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/orderContoller");

router.route("/order").post(createOrder);

module.exports = router;
