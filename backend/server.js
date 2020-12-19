import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import userCreateRoute from './routes/userCreateRoute';
import restaurantRoute from './routes/restaurantRoute'
import userLoginRoute from './routes/userLoginRoute'
import dotenv from 'dotenv'

dotenv.config()

const server=express()

server.use(express.json())
server.use(cors())


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster-foodmap.stgrr.mongodb.net/food_map`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

server.use("/sign-up", userCreateRoute)
server.use("/login", userLoginRoute)
server.use("/restaurants", restaurantRoute )

server.listen(3001, function() {
  console.log("express server is running on port 3001");
})