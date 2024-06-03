import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { configDotenv } from "dotenv";
import connectMongoDB from "./modules/connection.js";
import router from "./router/router.js";

//create express app
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware setup
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: false }));
configDotenv(); //connection to dot env

//connect to the dot env file datas
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001;

//connect to the database
connectMongoDB(URL);

const main = () => {
  app.use("/api", router);

  app.listen(PORT, () => console.log("Server is listen at port", PORT));
};

main();
