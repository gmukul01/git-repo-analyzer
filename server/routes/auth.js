import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/github", passport.authenticate("github"));

router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  res.redirect("/");
});

export default router;
