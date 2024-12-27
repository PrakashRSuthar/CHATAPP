import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

const app = express();
const PORT =  5000;

dotenv.config();

app.use(express.json());


// app.get("/", (req , res)=>{
//     //root route http://localhoast:5000
//     res.send("hello world");
// })
app.use("/api/auth", authRoutes)
app.listen(PORT, ()=> {
    connectToMongoDb()
    console.log('server running on port ${PORT}')
});

