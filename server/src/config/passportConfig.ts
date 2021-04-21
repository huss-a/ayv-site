import { Strategy as LocalStrat, VerifyFunction } from "passport-local";
import { UsersModel } from "../models/Users";
import { PassportStatic } from "passport";
import bcrypt from "bcrypt";

export default function (passport: PassportStatic) {
  async function authUser(email: string, password: string, done: any) {
    const user = await UsersModel.findOne({ email });

    if (!user) return done(null, false, { msg: "No such user." });

    if (await bcrypt.compare(password, user.password)) return done(null, user);

    return done(null, false);
  }
  passport.use(new LocalStrat({ usernameField: "email" }, authUser));

  passport.serializeUser((user: any, done) => done(null, user.id));

  passport.deserializeUser(async (id, done) => {
    const user = await UsersModel.findById(id);
    if (user) return done(null, user);
  });
}