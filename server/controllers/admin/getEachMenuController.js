import express from "express";
import mongoose from "mongoose";
import Menu from "../../models/menuModel.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Check if ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        success: false,
        err_code: "INVALID_ID",
        msg: "Invalid ID format",
      });
    }

    // Check if the menu item exists
    const menuItem = await Menu.findById(id);

    if (!menuItem) {
      return res.status(400).send({
        success: false,
        err_code: "MENU_ID_NOT_EXISTS",
        msg: "Menu ID does not exist",
      });
    }

    //success message
    res.status(200).send({
      success: true,
      msg: "Successfully Saved Menu Details !",
      data: menuItem,
    });
  } catch (error) {
    console.error("Errors", error);
  }
});
export { router };
export default router;
