import { validationResult } from "express-validator";
import Menu from "../../models/menuModel.js";
import express from "express";
import upload from "../../middlewares/menuImgUpload.js";

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const errors = validationResult(req.body);

    if (!errors.isEmpty()) {
      return res.status(400).send({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    //receive menu data from request
    const { category, name, description, price } = req.body;
    const imageData = req.file.path; // Contains information about the uploaded file

    // console.log("Uploaded image data:", imageData);
    // console.log("Uploaded data:", req.body);

    //if image not exist throw error message
    if (!req.file) {
      return res.status(400).json({
        success: false,
        err_code: "IMAGE_IS_REQUIRED",
        message: "Image is required",
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

    //check if the menu already exists
    const isExists = await Menu.findOne({
      name,
      category,
    });

    //if exists throw some error message
    if (isExists) {
      return res.status(400).send({
        success: false,
        err_code: "MENU_ALREADY_EXISTS",
        msg: "Menu Already Exists !!!",
      });
    }

    //create new menu
    const newMenu = new Menu({
      category,
      image: imageData,
      name,
      description,
      price,
    });

    //save new menu to the database
    const savedMenu = await newMenu.save();

    //success message
    res.status(200).send({
      success: true,
      msg: "Successfully Saved Menu Details !",
      data: savedMenu,
    });
  } catch (error) {
    console.error("Errors", error);
  }
});

export { router };
export default router;
