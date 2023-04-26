const { check } = require("express-validator");

exports.createUserValidator = [
  check("email", "Invalid Email").isEmail(),
  check("name").isLength({ min: 5 }),
  check("password", "Incorrect Password").isLength({ min: 5 }), //"Incorrect Password" custom message
];

exports.loginUserValidator = [
  check("email", "Invalid Email").isEmail(),
  check("password", "Invalid Password").isLength({
    min: 5,
  }),
];
