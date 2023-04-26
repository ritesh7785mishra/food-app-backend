const express = require("express");
const {
  addOrderData,
  getUserOrders,
} = require("../controllers/orderController");
const orderRouter = express.Router();

orderRouter.route("/order-data").post(addOrderData);
orderRouter.route("/user-orders").post(getUserOrders);

module.exports = orderRouter;
