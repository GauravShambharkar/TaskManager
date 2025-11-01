import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { taskRoute } from "./Routes/Route.js";
dotenv.config();

// cors
const corsOption = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express().use(express.json(), cors(corsOption));

(() => {
  if (!process.env.DATABASE_STRING) {
    return console.error("MongoDB connection string is missing");
  }

  if (!process.env.PORT) {
    console.error("POET missing from env");
  }

  mongoose
    .connect(process.env.DATABASE_STRING!)
    .then(() => console.log("Connected to MongoDB"));
})();

app.use("/app", taskRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running successfully on port ${port}`);
  console.log();
  console.log(`---> GET: http://localhost:${port}/app/task/:id`);
  console.log(`---> POST: http://localhost:${port}/app/createTask`);
  console.log(`---> PUT: http://localhost:${port}/app/updateTask/:id`);
  console.log(`---> DELETE: http://localhost:${port}/app/deleteTask/:id`);
});
