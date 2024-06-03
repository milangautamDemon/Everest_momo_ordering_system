import express from "express";
import mongoose from "mongoose";
import Menu from "../../models/menuModel.js";
import fs from "fs";
import path from "path";

const router = express.Router();

router.delete("/:id", async (req, res) => {
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

    // Delete the menu item
    await Menu.findByIdAndDelete(id);

    const filePath = `./${menuItem.image}`;

    try {
      fs.unlinkSync(path.resolve(filePath));
      return res.status(200).send({
        success: true,
        msg: "Data deleted successfully!",
      });
    } catch (fileErr) {
      console.error("Error deleting file:", fileErr);
      return res.status(500).send({
        success: false,
        err_code: "FILE_DELETE_ERROR",
        msg: "Error deleting associated file",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({
      success: false,
      err_code: "INTERNAL_SERVER_ERROR",
      msg: "An error occurred while processing the request",
    });
  }
});

export { router };
export default router;
