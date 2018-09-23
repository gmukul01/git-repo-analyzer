import GitHubStrategy from "passport-github2";
import User from "../models/User";

const strategy = passport => {
  passport.use(
    new GitHubStrategy.Strategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOrCreate(
          { userId: profile.id },
          {
            userId: profile.id,
            name: profile.displayName,
            username: profile.username
          },
          (err, user) => done(err, { accessToken })
        );
      }
    )
  );
};

export default strategy;
