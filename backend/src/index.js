import express from "express";
import { connectDB } from "./lib/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const Port = process.env.Port || 3001;

app.get('/',(req,res)=>{
    res.send("Home is running");
    console.log("it works");
})

app.listen(Port,()=>{
    console.log(`This server is running on Port : ${Port}`);
    connectDB();
})