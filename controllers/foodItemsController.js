const foodItemsModel = require("../models/foodItemsModel");
const foodCategoryModel = require("../models/foodCategoryModel");

module.exports.addFoodItem = async function addFoodItem(req, res) {
  try {
    let dataObj = req.body;

    if (dataObj) {
      let foodItem = await foodItemsModel.create(dataObj);
      if (foodItem) {
        res.json({
          message: "food item added successfully",
          data: foodItem,
        });
      } else {
        res.json({
          message: "food item not added successfully",
        });
      }
    } else {
      res.json({
        message: "data obj not found",
      });
    }
  } catch (error) {
    res.json(error.message);
  }
};

module.exports.addFoodCategory = async function addFoodCategory(req, res) {
  try {
    const dataObj = req.body;
    const addedCategory = await foodCategoryModel.create(dataObj);
    if (addedCategory) {
      res.json({
        message: "category added successfully",
        data: addedCategory,
      });
    } else {
      res.json({
        message: "not able add category",
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports.getFoodItems = async function getFoodItems(req, res) {
  try {
    const data = await foodItemsModel.find({});
    if (data) {
      res.json({
        message: "food items retreived successfully",
        success: true,
        food_items: data,
      });
    } else {
      res.json({
        message: "not able to get food items ",
        success: false,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

module.exports.getFoodCategory = async function getFoodCategory(req, res) {
  try {
    const data = await foodCategoryModel.find({});
    if (data) {
      res.json({
        message: "food category retreived successfully",
        success: true,
        food_category: data,
      });
    } else {
      res.json({
        message: "not able to get food category ",
        success: false,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
