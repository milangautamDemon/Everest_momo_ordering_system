import { check } from "express-validator";


const contactValidator = [
    check("firstName").not().isEmpty().withMessage("First_Name is Required !!!"),
    check("lastName").not().isEmpty().withMessage("Last_Name is Required !!!"),
    check("email").not().isEmpty().withMessage("Email is Required !!!"),
    check("email").isEmail().withMessage("Please Enter Valid_Email").normalizeEmail({gmail_remove_dots: true}),
    check("helps").not().isEmpty().withMessage("Please Choose the Field !!!"),
    check("phone").not().isEmpty().withMessage("Phone_No is Required !!!"),
    check("message").not().isEmpty().withMessage("Please type Message !!!")
];

export {contactValidator};
export default contactValidator;