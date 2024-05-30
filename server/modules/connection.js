import mongoose from "mongoose"

const connectMongoDB = (URL) => {
   return ( 
        mongoose.connect(URL)
        .then(() => console.log("Database connected successfully"))
        .catch(error => console.error("Error connecting database", error))
    )
}
export default connectMongoDB;