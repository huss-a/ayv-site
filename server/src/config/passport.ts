import { Strategy as LocalStrat, VerifyFunction } from "passport-local";
import { UsersModel } from "../models/Users";
import { PassportStatic, use } from "passport";
import bcrypt from "bcrypt";

export function init(passport: PassportStatic) {
  const authUser: VerifyFunction = async (
    email: string,
    password: string,
    done: any
  ) => {
    const user = await UsersModel.findOne({ email: email });
    if (!user) return done(null, false, { message: "No such user." });
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { msg: "Incorrect Password." });
      }
    } catch (err) {
      console.log(err);
      return done(err);
    }
  };
  passport.use(new LocalStrat({ usernameField: "email" }, authUser));
  passport.serializeUser((user: any, done) => done(null, user.id));

  passport.deserializeUser(async(id, done) => {
    const user = await UsersModel.findById(id);
    return done(null, user.id);
  });
};
