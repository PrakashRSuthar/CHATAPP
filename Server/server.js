import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectToMongoDB.js";

import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";


import cookieParser from "cookie-parser";

const app = express();
const PORT =  5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


// app.get("/", (req , res)=>{
//     //root route http://localhoast:5000
//     res.send("hello world");
// })
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);



app.listen(PORT, ()=> {
    connectToMongoDb()
    console.log("server running on port ${PORT}")
});

