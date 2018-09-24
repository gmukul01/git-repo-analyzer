import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import path from "path";

import auth from "./routes/auth";
import githubStrategy from "./auth/github";
import errorHandler from "./util/error-handler";

const app = express();
const port = process.env.PORT || 8080;

//MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/../client/build")));

//Passport config
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));
githubStrategy(passport);

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "s3cr3t",
    resave: true,
    saveUninitialized: true,
    maxAge: 60000 * 30
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/auth", auth);

//global error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Git Repo Analyzer listening on port ${port}`));
