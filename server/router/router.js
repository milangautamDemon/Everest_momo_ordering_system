import express from "express";
import addContactController from "../controllers/addContactController.js";
import contactValidator from "../helpers/contactValidator.js";
import menuValidator from "../helpers/menuValidator.js";
import addMenuController from "../controllers/admin/addMenuController.js";
import getMenuController from "../controllers/getMenuController.js";
import updateMenuController from "../controllers/admin/updateMenuController.js";
import deleteMenuController from "../controllers/admin/deleteMenuController.js";
import getEachMenuController from "../controllers/admin/getEachMenuController.js";
import addCustomerTalkController from "../controllers/admin/customerTalk/addCustomerTalkController.js";
import getCustomerTalksController from "../controllers/getCustomerTalksController.js";

const router = express.Router();

router.use("/add-contact", contactValidator, addContactController);
router.use("/get-menu", getMenuController);
router.use("/get-menu", getEachMenuController);
router.use("/admin/add-menu", menuValidator, addMenuController);
router.use("/admin/update-menu", menuValidator, updateMenuController);
router.use("/admin/delete-menu", deleteMenuController);
router.use("/admin/add-customerTalk", addCustomerTalkController);
router.use("/get-customerTalks", getCustomerTalksController);

export { router };
export default router;
