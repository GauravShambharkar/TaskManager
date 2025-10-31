import type { Request, Response } from "express";

const updateTaskController = (req: Request, res: Response) => {
  res.send({
    ok: true,
    msg: "update tasks",
  });
};

export { updateTaskController };
