import express from "express";
import addContactController from "../controllers/addContactController.js";
import contactValidator from "../helpers/contactValidator.js";
import menuValidator from "../helpers/menuValidator.js";
import addMenuController from "../controllers/admin/addMenuController.js";
import getMenuController from "../controllers/getMenuController.js";
import updateMenuController from "../controllers/admin/updateMenuController.js";
import deleteMenuController from "../controllers/admin/deleteMenuController.js";

const router = express.Router();

router.use("/add-contact", contactValidator, addContactController);
router.use("/get-menu", getMenuController);
router.use("/admin/add-menu", menuValidator, addMenuController);
router.use("/admin/update-menu", menuValidator, updateMenuController);
router.use("/admin/delete-menu", deleteMenuController);

export { router };
export default router;
