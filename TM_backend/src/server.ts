import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { taskRoute } from "./Routes/Route.js";
dotenv.config();

const corsOption = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
const app = express().use(express.json(), cors(corsOption));

mongoose
  .connect(process.env.DATABASE_STRING || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection string is missing:", err));

if (!process.env.PORT) {
  new Error("POOR missing from env");
}

app.use("/app", taskRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running successfully on port ${port}`);
  console.log();
  console.log(`---> Get: localhost://app/task/:id`);
  console.log(`---> post: localhost://app/createTask`);
  console.log(`---> update: localhost://app/updateTask/:id`);
  console.log(`---> delete: localhost://app/deleteTask/:id`);
});
