import express from "express";

const app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(8080, () => console.log("Git Repo Analyzer listening on port 8080"));
