import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import userRoute from './routes/userRoute';
import restaurantRoute from './routes/restaurantRoute'
import dotenv from 'dotenv'

dotenv.config()

const server=express()

server.use(express.json())
server.use(cors())


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster-foodmap.stgrr.mongodb.net/food_map`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

server.use("/sign-up", userRoute)
server.use("/restaurants", restaurantRoute )

server.listen(3001, function() {
  console.log("express server is running on port 3001");
})