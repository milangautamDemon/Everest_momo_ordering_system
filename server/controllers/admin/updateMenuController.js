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
    const { id } = req.params.id;

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

    const filePath = isExists.image; // Assuming 'image' field contains the file path

    if (filePath) {
      fs.unlink(path.resolve(filePath), (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return;
        }

        console.log("File deleted successfully:", filePath);
      });
    } else {
      console.log("No file path found in the document");
    }

    const imageData = req.file.path; // Contains information about the uploaded file

    //if image not exist throw error message
    if (!req.file) {
      return res.status(400).json({
        success: false,
        err_code: "IMAGE_IS_REQUIRED",
        message: "Image is required",
      });
    }

    //if exists then delete and update
    await Menu.findByIdAndUpdate({
      category,
      image: imageData,
      name,
      description,
      price,
    });

    //success message
    res.status(200).send({
      success: true,
      msg: "Data Deleted Successfully !",
    });
  } catch (error) {
    console.error("Error:", error);
  }
});

export { router };
export default router;
