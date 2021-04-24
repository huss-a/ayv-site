import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  if (req.headers.referer !== "https://ayv-dev.netlify.app/")
    return res.status(401).send("Unauthorized request!");
  next();
}
