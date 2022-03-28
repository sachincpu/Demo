import express from "express"
import dotenv from "dotenv"
import router from "./router/routes.js"
import mongoose from "mongoose";

const app=express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());
app.use("/users",router);

mongoose.connect(process.env.DB_URI,()=>{
    console.log("Connected to DB");
})

app.listen(process.env.PORT,()=>{
    console.log("Connected to Server");
});