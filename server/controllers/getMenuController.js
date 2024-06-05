import express from "express";
import Menu from "../models/menuModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    //find the all menu data from database
    const menuDatas = await Menu.find({});
    // console.log(menuDatas);

    //if any data not exists
    if (!menuDatas) {
      return res.status(400).send({
        success: false,
        err_code: "DATA_NOT_EXISTS",
        msg: "Data not Exists !!!",
      });
    }

    //success message
    res.status(200).send({
      success: true,
      msg: "Successfully Saved Menu Details !",
      data: menuDatas,
    });
  } catch (error) {
    console.error("Errors", error);
  }
});

export { router };
export default router;
