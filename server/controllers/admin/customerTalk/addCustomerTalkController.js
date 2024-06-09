import express from "express";
import Talk from "../../../models/talkModel.js";
import upload from "../../../middlewares/menuImgUpload.js";

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  try {
    //receive data from the body
    const { name, words } = req.body;

    const imageData = req.file.path; // Contains information about the uploaded file

    console.log(imageData);
    //if image not exist throw error message
    if (!req.file) {
      return res.status(400).json({
        success: false,
        err_code: "IMAGE_IS_REQUIRED",
        message: "Image is required",
      });
    }

    //check where data is receive or not
    if (!name && !words) {
      return res.status(400).send({
        success: false,
        err_code: "DATA_NOT_FOUND",
        msg: "Data not found !!!",
      });
    }

    //check if data exists or not
    const isExists = await Talk.findOne({
      name,
      words,
    });

    //if exists then send error msg
    if (isExists) {
      return res.status(400).send({
        success: false,
        err_code: "DATA_ALREADY_EXISTS",
        msg: "Data already exists !!!",
      });
    }

    //create new data
    const newData = new Talk({
      name,
      words,
      image: imageData,
    });

    //save data to the database
    const savedData = await newData.save();

    //send success msg
    res.status(200).send({
      success: true,
      msg: "Data saved Successfully !!!",
      data: savedData,
    });
  } catch (error) {
    console.error("Errors", error);
  }
});

export { router };
export default router;
