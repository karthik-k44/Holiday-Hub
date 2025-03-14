
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
dburl= process.env.DBURL
const connectDB =async ()=>{
    try{
        await mongoose.connect(dburl)
        console.log("Database connected successfully")
    }
    catch(error)
    {
        console.log("Unable to connect database")
    }
}