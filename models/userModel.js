const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
const { db_link } = process.env;
const options = {
  dbName: "food-delivery-app",
};
mongoose
  .connect(db_link, options, { useNewUrlParser: true })
  .then(() => {
    console.log("user data base connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
