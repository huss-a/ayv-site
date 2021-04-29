if (process.env.NODE_ENV === "dev") {
  const dotenv = require("dotenv");

  dotenv.config({
    path:
      "C:\\Users\\Hussain\\OneDrive\\Desktop\\Web development\\ayv-site\\server\\.env.local",
  });
}

import express from "express";
import bcrypt from "bcrypt";
import dbConnect from "./config/db";
import { UsersModel } from "./models/Users";
import passport from "passport";
import session from "express-session";
import cookieparser from "cookie-parser";
import cors from "cors";
import passportCfg from "./config/passportConfig";
import chalk from "chalk";
import liveApi from "./routes/api-calls";
import auth from "./middleware/auth";

const app = express();
dbConnect(process.env.DB_CONN_URI!);
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_URL,
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieparser(process.env.SESSION_SECRET));

app.use(passport.initialize());
app.use(passport.session());
passportCfg(passport);

app.use("/if", liveApi);

// Routes
app.get("/", (req, res) => {
  res.send("Finnair Virtual 2021 ©");
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.json({ msg: "Invalid Password - Email combination" });
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send({
          msg: "Successfully Logged in!",
          ...req.user,
        });
      });
    }
  })(req, res, next);
});

app.post("/register", auth, async (req, res) => {
  try {
    const userExists = await UsersModel.findOne({ email: req.body.email });
    if (userExists) return res.send("User Already Exists.");
    const hashedPsw = await bcrypt.hash(req.body.password, 10);
    const newUser = new UsersModel({
      ifcName: req.body.name,
      email: req.body.email,
      password: hashedPsw,
      callsign: req.body.callsign,
    });

    await newUser.save();
    res.send("User Created!");
  } catch (err) {
    console.log(err);
  }
});

app.post("/logout", auth, (req, res) => {
  if (req.user) {
    req.logOut();
    res.json({ msg: "Logged out" });
  } else res.json({ msg: "Not logged in" });
});

app.get("/user", auth, (req, res) => {
  if (!req.user) return res.json({ msg: "Not logged in" });
  return res.json(req.user);
});

app.listen(PORT, () =>
  console.log(chalk.bold(chalk.bgBlueBright`Server Started on port ${PORT}!`))
);
