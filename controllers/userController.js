const userModel = require("../models/userModel");
const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret } = process.env;

module.exports.createUser = async function createUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const salt = await bcrypt.genSalt(10);
  let secPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const dataObj = req.body;
    const user = await userModel.create({
      ...dataObj,
      password: secPassword,
    });
    if (user) {
      res.json({
        message: "data created successfully",
        data: user,
        success: true,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports.loginUser = async function loginUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const dataObj = req.body;
    const { email, password } = dataObj;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errors: "try logging with correct credentials",
      });
    }

    const pwdCompare = await bcrypt.compare(password, user.password);

    if (!pwdCompare) {
      return res.status(400).json({
        errors: "try logging with correct credentials",
      });
    }
    // for jwt token authorisation
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, jwtSecret);
    return res.json({
      success: true,
      message: "logged in successfully",
      data: user,
      authToken: authToken,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
