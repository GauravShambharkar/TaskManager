import type { Request, Response } from "express";

const deleteTaskController = (req: Request, res: Response) => {
  res.send({
    ok: true,
    msg: "delete tasks",
  });
};

export { deleteTaskController };
