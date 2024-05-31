import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    try {

        const {} = req.body;
        
    } catch (error) {
        console.error("Errors", error);
    }
})