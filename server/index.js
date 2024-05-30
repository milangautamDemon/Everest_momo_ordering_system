import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import connectMongoDB from "./modules/connection.js";
import router from "./router/router.js";

//create express app
const app = express();

//middleware setup
app.use(express.json());
app.use(cors());
configDotenv(); //connection to dot env

//connect to the dot env file datas
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001;

//connect to the database
connectMongoDB(URL);

const main = () => {
    app.use("/api", router);

    app.listen(PORT, () => console.log('Server is listen at port', PORT));
}

main();