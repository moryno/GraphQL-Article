import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to blogDB");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());

app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log("Backend running at port 8800");
});
