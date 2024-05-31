import express from "express";
import addContact from "../controllers/addContactController.js"
import contactValidator from "../helpers/contactValidator.js";

const router = express.Router();

router.use("/add-contact", contactValidator, addContact);
router.use("add-menu", )

export {router};
export default router;