const express = require("express");

const {
  addFoodItem,
  addFoodCategory,
  getFoodItems,
  getFoodCategory,
} = require("../controllers/foodItemsController");

const foodItemsRouter = express.Router();
foodItemsRouter.route("/add-food-item").post(addFoodItem);
foodItemsRouter.route("/add-category").post(addFoodCategory);
foodItemsRouter.route("/food-items").get(getFoodItems);
foodItemsRouter.route("/food-category").get(getFoodCategory);

module.exports = foodItemsRouter;
