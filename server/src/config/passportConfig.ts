import { Strategy as LocalStrat } from "passport-local";
import { UsersModel } from "../models/Users";
import { PassportStatic } from "passport";
import bcrypt from "bcrypt";

export default function (passport: PassportStatic) {
  async function authUser(email: string, password: string, done: any) {
    const user:any = await UsersModel.findOne({ email });

    if (!user) return done(null, false, { msg: "No such user." });

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if(isCorrectPassword) return done(null, user)
    else return done(null, false, {msg: "Incorrect Password."})

    return done(null, false);
  }
  passport.use(new LocalStrat({ usernameField: "email" }, authUser));

  passport.serializeUser((user: any, done) => done(null, user.id));

  passport.deserializeUser(async (id, done) => {
    const user = await UsersModel.findById(id);
    if (user) return done(null, user);
  });
}
