import express from "express";
import Talk from "../../../models/talkModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    //receive data from the body
    const { name, words } = req.body;

    //check where data is receive or not
    if (!name || !words) {
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
