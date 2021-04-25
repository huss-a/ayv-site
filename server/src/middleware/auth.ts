import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  if (req.headers.referer !== `${process.env.CORS_URL}/`)
    return res.status(401).send("Unauthorized request!");
  next();
}
