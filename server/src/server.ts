import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcrypt";
import dbConnect from "./config/db";
import { UsersModel } from "./models/Users";
import passport from "passport";
import session from "express-session";
import cookieparser from "cookie-parser";
import cors from "cors";
import passportCfg from "./config/passportConfig";

const app = express();
dbConnect(
  "mongodb+srv://huss:uheh@ayva-site.gwp7h.mongodb.net/AYV-Site-DB?retryWrites=true&w=majority"
);
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieparser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
passportCfg(passport);

// Routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("Incorrect Email and Password combination.");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Logged in!");
      });
    }
  })(req, res, next);
});

app.post("/register", async (req, res) => {
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

app.get("/user", (req, res) => {
  res.send(req.user);
});

app.listen(PORT, () => console.log(`Server Started on port ${PORT}!`, process.env));
