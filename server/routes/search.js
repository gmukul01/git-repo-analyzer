import express from "express";
import fetch from "../util/fetch";

import { getRepos, getRepoDetails, sortRepos } from "../controller/search";
import SearchHistorySchema from "../models/SearchHistory";

const router = express.Router();

router.post("/", (req, res) => getRepos(req, res));

router.post("/save", (req, res) => {
  const { repoName, htmlUrl } = req.body;
  SearchHistorySchema.findOneAndUpdate({ user: req.session.user._id }, { $push: { history: { repoName, htmlUrl } } }, { upsert: true, new: true, safe: true }, (err, result) => {
    result ? res.status(200).json({ result }) : res.status(500).json({ message: err });
  });
});

router.get("/history", (req, res) => {
  SearchHistorySchema.findOne({ user: req.session.user._id }, async (err, data) => {
    if (data) {
      const repodetails = await getRepoDetails(req.session.accessToken, data.history);
      res.status(200).json(repodetails.sort(sortRepos));
    } else if (err) res.status(500).json({ message: err });
    else res.status(200).json([]);
  });
});

export default router;
