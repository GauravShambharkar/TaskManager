import type { Request, Response } from "express";
import { taskModel } from "../Models/TaskModel.js";

const createTaskController = async (req: Request, res: Response) => {
  try {
    const { email, title, description, status, priority, dueDate } = req.body;

    if (!email) {
      return res.status(400).send({ ok: false, errMsg: "Email is required" });
    }

    if (!title || title.trim().length < 3) {
      return res.status(400).send({
        ok: false,
        errMsg: "Title is required and must be at least 3 characters long",
      });
    }

    if (title.length > 50) {
      return res.status(400).send({
        ok: false,
        errMsg: "Title cannot exceed 50 characters",
      });
    }

    if (description && description.length > 200) {
      return res.status(400).send({
        ok: false,
        errMsg: "Description cannot exceed 200 characters",
      });
    }

    if (!status || !["pending", "in-progress", "completed"].includes(status)) {
      return res.status(400).send({
        ok: false,
        errMsg: "Status must be one of: pending, in-progress, completed",
      });
    }

    if (priority && !["low", "medium", "high"].includes(priority)) {
      return res.status(400).send({
        ok: false,
        errMsg: "Priority must be one of: low, medium, high",
      });
    }

    // find the tasks if available update the ezisting data
    const TaskData = await taskModel.findOneAndUpdate(
      { email },
      {
        $push: {
          tasks: {
            $each: [
              {
                title: title.trim(),
                description,
                status: status || "pending",
                priority: priority || "medium",
                dueDate: dueDate ? new Date(dueDate) : null,
              },
            ],
            $position: 0,
          },
        },
      },
      { new: true }
    );

    // if not available create new document
    if (!TaskData) {
      const createNewtask = await taskModel.create({
        email: email,
        tasks: [
          {
            title: title.trim(),
            description,
            status: status || "pending",
            priority: priority || "medium",
            dueDate: dueDate ? new Date(dueDate) : null,
          },
        ],
      });

      return res.send({
        ok: true,
        message: "Task created successfully",
        task: await createNewtask.tasks,
      });
    }

    // if available update t
    res.send({
      ok: true,
      message: "Task updated successfully",
      task: await TaskData.tasks,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).send({
      ok: false,
      errMsg: "Server error while creating task",
    });
  }
};

export { createTaskController };
