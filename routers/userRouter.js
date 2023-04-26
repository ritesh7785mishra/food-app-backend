const express = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const {
  createUserValidator,
  loginUserValidator,
} = require("../validators/userValidator");

const userRouter = express.Router();

userRouter.route("/create-user").post(createUserValidator, createUser);

userRouter.route("/login-user").post(loginUserValidator, loginUser);

module.exports = userRouter;
