import express from "express";
import postContact from "../controllers/postContactController.js"
import contactValidator from "../helpers/contactValidator.js";

const router = express.Router();

router.use("/add-contact", contactValidator, postContact);

export {router};
export default router;