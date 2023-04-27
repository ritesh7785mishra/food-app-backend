const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

require("dotenv").config();
const { db_link } = process.env;

const options = {
  dbName: "food-delivery-app",
};
mongoose
  .connect(db_link, options, { useNewUrlParser: true })
  .then((db) => {
    console.log("food category data base connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const foodCategorySchema = mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
});

const foodCategoryModel = mongoose.model(
  "foodCategoryModel",
  foodCategorySchema
);
module.exports = foodCategoryModel;
