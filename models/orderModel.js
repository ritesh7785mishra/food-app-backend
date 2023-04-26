const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
const { db_link } = process.env;
const options = {
  dbName: "food-delivery-app",
};
mongoose
  .connect(db_link, options)
  .then(() => {
    console.log("order data base connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const orderSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  order_data: {
    type: Array,
    required: true,
  },
});

const orderModel = mongoose.model("orderModel", orderSchema);

module.exports = orderModel;
