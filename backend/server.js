import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import userRoute from './routes/userRoute';

const server=express()

server.use(express.json())
server.use(cors())

server.use("/sign-up", userRoute)


mongoose.connect('mongodb+srv://fullmanager:34rDBwM2@cluster-foodmap.stgrr.mongodb.net/create_users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



server.listen(3001, function() {
  console.log("express server is running on port 3001");
})