import type { Request, Response } from "express";
import { taskModel } from "../Models/TaskModel.js";

const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedTask = await taskModel.findOneAndUpdate(
      { "tasks._id": id },
      {
        $pull: {
          tasks: {
            _id: id,
          },
        },
      },
      { new: true }
    );
    if (!deletedTask) {
      return res.status(404).send({
        ok: false,
        message: "Task not found",
      });
    }

    res.send({
      ok: true,
      message: "Task deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting task:", error);

    res.status(500).send({
      ok: false,
      message: "Server error while deleting task",
    });
  }
};

export { deleteTaskController };
