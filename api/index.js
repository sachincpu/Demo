import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'

const app=express();

dotenv.config();
app.use(express.json());

app.use("/users",userRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is started");
})