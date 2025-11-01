import express from "express";
import { readTaskController } from "../Controllers/readTaskController.js";
import { createTaskController } from "../Controllers/createTaskController.js";
import { updateTaskController } from "../Controllers/updateTaskController.js";
import { deleteTaskController } from "../Controllers/deleteTaskController.js";

const taskRoute = express.Router();

taskRoute.get("/task/:email", readTaskController);
taskRoute.post("/createTask", createTaskController);
taskRoute.put("/updateTask/:id", updateTaskController);
taskRoute.delete("/deleteTask/:id", deleteTaskController);

export { taskRoute };
