const { body } = require("express-validator");
const path = require("path");

const productValidator = [
  body("name")
    .notEmpty()
    .withMessage("This field must be completed with the product´s name")
    .isLength({ min: 5 })
    .withMessage(
      "Please, the product´s name must contain at least five characters"
    ),
  body("description")
    .isLength({ min: 6 })
    .withMessage("Please, the description must contain at least 20 characters"),
  body("category_id").notEmpty().withMessage("Please select a category"),
  body("sub_category_id")
    .notEmpty()
    .withMessage("Please select a sub_category"),
  body("color_id").notEmpty().withMessage("Please select a color"),
  
//   body("memory_id").notEmpty().withMessage("Please select a memory"),
//   ,
  body("brand_id").notEmpty().withMessage("Please select a brand"),

  body("price").notEmpty().withMessage("Please set the product´s price"),
  
  body("stock").notEmpty().withMessage("Please set the product´s stock"),
  
  body("image").custom((value, { req }) => {
    let array = [".jpg", ".png", ".jpeg", ".jfif",".webp"];
    
    if(req.files.length === 0){
        throw new Error('Please upload at least one picture')
    }
    req.files.forEach(file => {
          let extname = path.extname(file.originalname);
          if (!array.includes(extname)) {
            throw new Error(
              `Please upload a profile picture with a valid format: ${array.join(
                ", "
              )}`
            );
          }
    });
    return true

  })
];

module.exports = productValidator;
