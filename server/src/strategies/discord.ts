import passport from "passport";
import { VerifyCallback } from "passport-oauth2";
import { Strategy } from "passport-discord";

const scopes = ["identify", "guilds", "guilds.join"];

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user: any, cb) => {
  cb(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: process.env.DCORD_CLIENT_ID!,
      clientSecret: process.env.DCORD_CLIENT_SECRET!,
      callbackURL: process.env.DCORD_CALLBACK_URL!,
      scope: scopes,
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: VerifyCallback
    ) => {
      return done(null, profile);
    }
  )
);
