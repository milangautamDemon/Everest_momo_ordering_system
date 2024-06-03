import { check } from "express-validator";

const menuValidator = [
  check("category")
    .not()
    .isEmpty()
    .withMessage("Menu Category is Required !!!"),
  check("name").not().isEmpty().withMessage("Menu Name is Required !!!"),
  check("price").not().isEmpty().withMessage("Menu Price is Required !!!"),
  check("price")
    .isNumeric() // Ensure price is a number
    .withMessage("Price must be a number")
    .isInt({ min: 150 }) // Ensure price is an integer greater than or equal to 150
    .withMessage("Price must be at least 150"),
  check("description")
    .not()
    .isEmpty()
    .withMessage("Menu Description is Required !!!"),
];

export { menuValidator };
export default menuValidator;
