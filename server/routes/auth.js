import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/github", passport.authenticate("github", { scope: ["read:user", "repo:status"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: `${process.env.CLIENT_URL}/`
  }),
  (req, res, next) => {
    req.session.accessToken = req.user.accessToken;
    req.session.user = req.user.data;
    req.session.save();
    res.redirect(`${process.env.CLIENT_URL}/search`);
  }
);

router.get("/user", (req, res, next) => {
  req.user ? res.status(200).json({ user: req.session.user }) : res.status(403).json({ user: null });
});

router.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.redirect(`${process.env.CLIENT_URL}/`);
  } else {
    res.status(200).json({ message: "no user to log out!" });
  }
});

export default router;
