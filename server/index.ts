import { connectDB } from "./connectDb";
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  // connectDB();
  console.log("listening on port " + PORT);
});
