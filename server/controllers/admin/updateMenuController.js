import express from "express";
import Menu from "../../models/menuModel.js";
import { validationResult } from "express-validator";
import upload from "../../middlewares/menuImgUpload.js";
import fs from "fs";
import path from "path";

const router = express.Router();

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const errors = validationResult(req.body);

    if (!errors.isEmpty()) {
      return res.status(400).send({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    //receive id from params from the request
    const id = req.params.id;
    console.log(id);

    //receive menu data from request
    const { category, name, description, price } = req.body;

    // console.log("Uploaded image data:", imageData);
    // console.log("Uploaded data:", req.body);

    //check if id is available if noe throw some error
    if (!id) {
      return res.status(400).send({
        success: false,
        err_code: "ID_NOT_FOUND",
        message: "Menu_id_not_Found !!!",
      });
    }

    //check if all data are provided , if not throw error
    if (!category && name && description && price) {
      return res.status(400).send({
        success: false,
        err_code: "MENU_DETAILS_REQUIRED",
        msg: "All Menu Details Required !!!",
      });
    }

    //check if id exists or not
    const isExists = await Menu.findOne({ _id: id });

    //if not exists then throw some error message
    if (!isExists) {
      return res.status(400).send({
        success: false,
        err_code: "MENU_ID_NOT_EXISTS",
        msg: "User ID not Exists",
      });
    }

    let imageData = isExists.image; // Use existing image by default

    if (req.file) {
      imageData = req.file.path;

      // Delete the previous image if it exists
      if (isExists.image) {
        fs.unlink(path.resolve(isExists.image), (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log("File deleted successfully:", isExists.image);
          }
        });
      }
    }

    //if exists then delete and update
    const updatedData = await Menu.findByIdAndUpdate(
      id,
      { category, image: imageData, name, description, price },
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).send({
        success: false,
        err_code: "MENU_ITEM_NOT_FOUND",
        msg: "Menu item not found",
      });
    }

    //success message
    res.status(200).send({
      success: true,
      msg: "Data Updated Successfully !",
      data: updatedData,
    });
  } catch (error) {
    console.error("Error:", error);
  }
});

export { router };
export default router;
