import express from "express";
import Menu from "../models/menuModel";
import { validationResult } from "express-validator";

const router = express.Router();

router.post("/", async (req, res) => {
    try {

        const errors = validationResult(req.body);

        if (!errors.isEmpty()) {
            return res.status(400).send({
                success : false,
                msg : "Errors",
                errors : errors.array()
            })
        }

        //receive menu data from request
        const {category, menuImg, menuName, itemDescription, menuPrice} = req.body;

        //check if all data are provided , if not throw error
        if(!category && !menuImg && menuName && itemDescription && menuPrice){
            return res.status(400).send({
                success : false,
                err_code : "MENU_DETAILS_REQUIRED",
                msg : "All Menu Details Required !!!"
            })
        }

        //check if the menu already exists
        const isExists = await Menu.findOne({
            menuName,
            category
        })

        //if exists throw some error message
        if(isExists){
            return res.status(400).send({
                success : false,
                err_code : "MENU_ALREADY_EXISTS",
                msg : "Menu Already Exists !!!"
            })
        }

        //create new menu
        const newMenu = new Menu({
            category,
            menuImg,
            menuName,
            itemDescription,
            menuPrice
        })

        //save new menu to the database
        const savedMenu = await newMenu.save();

        //success message
        res.status(200).send({
            success : true,
            msg : "Successfully Saved Menu Details !"
        })
        
    } catch (error) {
        console.error("Errors", error);
    }
})

export {router};
export default router;