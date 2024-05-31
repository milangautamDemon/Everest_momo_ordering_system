import { check } from "express-validator";

const menuValidator = [
    check("category").not().isEmpty().withMessage("Menu Category is Required !!!"),
    check("menuImg").not().isEmpty().withMessage("Menu Image is Required !!!"),
    check("menuName").not().isEmpty().withMessage("Menu Name is Required !!!"),
    check("menuPrice").not().isEmpty().withMessage("Menu Price is Required !!!"),
    check("menuPrice").isNumeric().withMessage("Menu Price should be in Number !!!"),
    check("itemDescription").not().isEmpty().withMessage("Menu Description is Required !!!")
]

export {menuValidator};
export default menuValidator;