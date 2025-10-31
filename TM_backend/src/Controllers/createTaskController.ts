import type { Request, Response } from "express";

const createTaskController = (req: Request, res: Response) => {
  res.send({
    ok: true,
    msg: "create tasks",
  });
};

export { createTaskController };
