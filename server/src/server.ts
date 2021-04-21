import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcrypt";
import dbConnect from "./config/db";
import mongoose from "mongoose";
import { UsersModel } from "./models/Users";
import { init } from "./config/passport";
import passport from "passport";
import session from "express-session";
import flash from "express-flash";

const app = express();
dbConnect();
init(passport);
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: process?.env?.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({ msg: "HEY!" });
});

// app.get("/login", (req, res) => {});

// app.get("/register", (req, res) => {});

app.post("/register", async (req, res) => {
  try {
    const hashedPsw = await bcrypt.hash(req.body.password, 10);
    await UsersModel.insertMany({
      name: req.body.name,
      email: req.body.email,
      password: hashedPsw,
    });
    res.send("User Registered!");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("An error occured");
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: "Logged in!",
  })
);

app.listen(PORT, () => console.log(`Server started on ${PORT}!`));
