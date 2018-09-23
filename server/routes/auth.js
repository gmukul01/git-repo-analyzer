import express from "express";
import axios from "axios";
import passport from "passport";

const router = express.Router();

router.get("/github", passport.authenticate("github"));

router.get("/github/callback", passport.authenticate("github"), (req, res, next) => {
  req.session.accessToken = req.user.accessToken;
  req.session.save();
  res.redirect("/");
});

export default router;
