import type { Request, Response } from "express";

const readTaskController = (req: Request, res: Response) => {
  res.send({
    ok: true,
    msg: "reading tasks",
  });
};

export { readTaskController };
