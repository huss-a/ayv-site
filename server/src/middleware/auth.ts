if (process.env.NODE_ENV === "dev") {
  const dotenv = require("dotenv");

  dotenv.config({
    path:
      "C:\\Users\\Hussain\\OneDrive\\Desktop\\Web development\\ayv-site\\server\\.env.local",
  });
}

import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
    
  if (req.headers.token === process.env.AUTH_TOKEN) {
    next();
  } else {
    return res.status(401).json({ msg: "Unauthorized request." });
  }
}
