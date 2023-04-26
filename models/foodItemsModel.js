const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

require("dotenv").config();
const { db_link } = process.env;

const options = {
  dbName: "food-delivery-app",
};
mongoose
  .connect(db_link, options)
  .then((db) => {
    console.log("food data base connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const foodItemsSchema = mongoose.Schema({
  CategoryName: {
    type: String,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },

  options: {
    type: Array,
  },
  description: {
    type: String,
  },
});

const foodItemsModel = mongoose.model("foodItemsModel", foodItemsSchema);
module.exports = foodItemsModel;
