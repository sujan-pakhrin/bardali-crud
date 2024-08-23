import express from "express";
import db from "./db.js"
import userRouter from "./routes/user.route.js"
import cors from 'cors'


const app=express();
app.use(cors())
app.use(express.json())
app.use('/api',userRouter);

app.listen(5550,()=>{
    console.log("server is listening!")
})