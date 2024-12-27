import mongoose from "mongoose";

const connectToMongoDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI,)
       console.log("connected to mongoDB"); 
    }
    catch(error){
        console,log("error connecting to monogodb ", error.messge)
    }
}

export default connectToMongoDb ;
