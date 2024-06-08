import express from "express";
import Talk from "../models/talkModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Talk.find({});

    //check if data is available or not
    if (!data) {
      return res.status(400).send({
        success: false,
        err_code: "DATA_NOT_FOUND",
        msg: "Data not found!!!",
      });
    }

    //if data available then send it as response
    res.status(200).send({
      success: true,
      msg: "Data fetch successfully !",
      data: data,
    });
  } catch (error) {
    console.error("Error", error);
  }
});

export { router };
export default router;
