import express from "express";
import fetch from "../util/fetch";
import axios from "axios";

const router = express.Router();

const getRepos = async (req, res) => {
  const { ownerName, repoName } = req.body;
  const { response, error } = await fetch({
    url: `https://api.github.com/search/repositories?access_token=${req.session.accessToken}&q="${repoName}"+user:"${ownerName}"&type=Repositories`,
    method: "get",
    headers: {
      Authorization: "OAUTH-TOKEN",
      Accept: "application/json"
    }
  });
  if (response) res.status(200).json({ ...response.data });

  res.status(500).json({ message: error });
};

const commitsCount = async (page, accessToken) => {
  const response = await axios({
    url: `https://api.github.com/repos/storybooks/storybook/contributors?access_token=${accessToken}&anon=1&page=${page}&per_page=100`,
    method: "get",
    headers: {
      Authorization: "OAUTH-TOKEN",
      Accept: "application/json"
    }
  });
  let contributions = response.data.reduce((acc, contributor) => acc + contributor.contributions, 0);
  if (response.data.length < 100) return contributions;
  return contributions + (await commitsCount(page + 1, accessToken));
};

const openPullRequestCount = async (page, accessToken) => {
  const response = await axios({
    url: `https://api.github.com/repos/storybooks/storybook/pulls?state=open?access_token=${accessToken}&anon=1&page=${page}&per_page=100`,
    method: "get",
    headers: {
      Authorization: "OAUTH-TOKEN",
      Accept: "application/json"
    }
  });
  let count = response.data.length;
  if (count < 100) return count;
  return count + (await openPullRequestCount(page + 1, accessToken));
};

const getReadMeText = async accessToken => {
  console.log(accessToken);
  const response = await axios({
    url: `https://api.github.com/repos/defunkt/jquery-pjax/readme?access_token=${accessToken}`,
    method: "get",
    headers: {
      Authorization: "OAUTH-TOKEN",
      Accept: "application/vnd.github.VERSION.raw"
    }
  });
  return response.data;
};

router.post("/", (req, res, next) => getRepos(req, res));

export default router;
