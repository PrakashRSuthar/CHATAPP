import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectToMongoDB.js";
import path from "path";

import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";


import cookieParser from "cookie-parser";
import {app} from "./socket/Socket.js";

const PORT =  5000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Client/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"Client","dist", "index.html"))
})

app.listen(PORT, ()=> {
    connectToMongoDb()
    console.log("server running on port ${PORT}")
});

