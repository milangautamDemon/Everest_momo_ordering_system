import express from "express";
import { validationResult } from "express-validator";
import Contact from "../models/contactModel.js";

const router = express.Router();

router.post("/", async(req, res) => {

    try {

        //check for error validation
        const errors = validationResult(req);

        //if error then throw error message 
        if(!errors.isEmpty()){
            return res.status(400).send({
                success : false,
                msg : "Errors",
                errors : errors.array()
            })
        };

        //receive user details from the request
        const {firstName, lastName, email, helps, phone, message} = req.body;

        //check if email is provided
        if(!email && !firstName && !lastName && !helps && !phone && !message){
            return res.status(400).send({
                success : false,
                err_code : "ALL_INPUT_ARE_REQUIRED",
                msg : "All Input are Required !!!"
            })
        };

        //check wheather the all same data already exists
        const isExists = await Contact.findOne({
            firstName,
            lastName,
            email,
            helps,
            phone,
            message
        })

        //if already exists then throw some error message
        if(isExists){
            return res.status(400).send({
                success : false,
                err_code : "USER_DETAILS_ALREADY_EXISTS",
                msg : "User Details already Exists !!!"
            })
        }

        //create new userData
        const newUserDatas = new Contact({
            firstName,
            lastName,
            email,
            helps,
            phone,
            message
        });

        //save new user data to the database
        const saveUserData = await newUserDatas.save();

        res.status(200).send({
            success : true,
            msg : "Data Successfully Saved !",
            data : saveUserData
        });
        
    } catch (error) {
        console.log('Error occurs', error);
    }
});

export {router};
export default router;