import { connectDB } from "./connectDb";
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  // connectDB();
  console.log("listening on port " + PORT);
});
