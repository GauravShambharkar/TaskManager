import type { Request, Response } from "express";
import { taskModel } from "../Models/TaskModel.js";

const readTaskController = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;

    if (email) {
      const task = await taskModel.findOne({ email });

      if (!task) {
        return res.status(404).send({
          ok: false,
          errMsg: "Task not found, check your email id is valid or not",
        });
      }

      return res.send({
        ok: true,
        email: email,
        task: task.tasks,
      });
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const tasks = await taskModel.find().skip(skip).limit(limit);
    const totalTasks = await taskModel.countDocuments();

    res.send({
      ok: true,
      page,
      limit,
      totalTasks,
      totalPages: Math.ceil(totalTasks / limit),
      tasks,
    });
  } catch (error) {
    console.error("Error reading tasks:", error);

    res.status(500).send({
      ok: false,
      errMsg: "Server error while reading tasks",
    });
  }
};

export { readTaskController };
