import type { Request, Response } from "express";
import { taskModel } from "../Models/TaskModel.js";

const updateTaskController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority, dueDate } = req.body;

    if (title !== undefined) {
      if (!title || title.trim().length < 3)
        return res.status(400).send({
          ok: false,
          errMsg: "Title must be at least 3 characters long",
        });
      if (title.length > 50)
        return res
          .status(400)
          .send({ ok: false, errMsg: "Title cannot exceed 50 characters" });
    }

    if (description !== undefined && description.length > 200)
      return res.status(400).send({
        ok: false,
        errMsg: "Description cannot exceed 200 characters",
      });

    if (status && !["pending", "in-progress", "completed"].includes(status))
      return res.status(400).send({ ok: false, errMsg: "Invalid status" });

    if (priority && !["low", "medium", "high"].includes(priority))
      return res.status(400).send({ ok: false, errMsg: "Invalid priority" });

    const updatedTask = await taskModel.findOneAndUpdate(
      { "tasks._id": id },
      {
        $set: {
          "tasks.$.title": title.trim(),
          "tasks.$.description": description,
          "tasks.$.status": status,
          "tasks.$.priority": priority,
          "tasks.$.dueDate": dueDate,
        },
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send({ ok: false, errMsg: "Task not found" });
    }

    res.send({
      ok: true,
      msg: "Task updated successfully",
      task: updatedTask.tasks,
    });
  } catch (error: any) {
    console.error("Error updating task:", error);
    res
      .status(500)
      .send({ ok: false, errMsg: "Server error while updating task" });
  }
};

export { updateTaskController };
