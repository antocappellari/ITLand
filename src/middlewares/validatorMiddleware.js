const { body } = require("express-validator");
const path = require("path");

const validator = [
  body("first_name")
    .notEmpty()
    .withMessage("This field must be completed with your name")
    .isLength({ min: 3 })
    .withMessage("Please, your name must contain at least three characters"),
  body("last_name")
    .notEmpty()
    .withMessage("This field must be completed with your last name")
    .isLength({ min: 3 })
    .withMessage(
      "Please, your last name must contain at least three characters"
    ),
  body("address")
    .notEmpty()
    .withMessage("This field must be completed with your address"),
  body("cell"),
  body("email")
    .notEmpty()
    .withMessage("This field must be completed with your email")
    .isEmail()
    .withMessage("Please, complete it  with a valid email"),
  body("image").custom((value, { req }) => {
    let array = [".jpg", ".png", ".jpeg", ".jfif"];
    let file = req.file;

    if (!file) {
      return true;
    } else {
      let extname = path.extname(file.originalname);
      if (!array.includes(extname)) {
        throw new Error(
          `Please upload a profile picture with a valid format: ${array.join(
            ", "
          )}`
        );
      }
    }
    return true;
  }),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Your password must contain at least 8 characters"),
  body("confirmPassword").custom((value, { req }) => {
    let pass = req.body.password;

    if (req.body.confirmPassword === pass) {
      return true;
    } else {
      throw new Error("Passwords do not match");
    }
  }),
  body("conditions")
    .notEmpty()
    .withMessage("Please accept our terms and conditions"),
];

module.exports = validator;
