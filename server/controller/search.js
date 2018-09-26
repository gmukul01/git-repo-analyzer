import fetch from "../util/fetch";

export const sortRepos = (a, b) => new Date(`${b.updated_at}`) - new Date(`${a.updated_at}`);

export const getRepoDetails = async (accessToken, history) =>
  await Promise.all(
    history.map(async ({ repoName, htmlUrl, updated_at }) => {
      const commitCount = await getCommitsCount(1, accessToken, repoName),
        openPullRequenCount = await getOpenPullRequestCount(1, accessToken, repoName),
        readme = await getReadMeText(accessToken, repoName);
      return { repoName, commitCount, openPullRequenCount, readme, htmlUrl, updated_at };
    })
  );

export const getRepos = async (req, res) => {
  const { ownerName, repoName } = req.body;
  const { response, error } = await fetch({
    url: `https://api.github.com/search/repositories?access_token=${req.session.accessToken}&q="${repoName}"+user:"${ownerName}"&type=Repositories`,
    method: "get",
    headers: {
      Authorization: "OAUTH-TOKEN",
      Accept: "application/json"
    }
  });
  return response ? res.status(200).json({ ...response.data }) : res.status(500).json({ message: error });
};

const getCommitsCount = async (page, accessToken, repoName) => {
  const { response, error } = await fetch({
    url: `https://api.github.com/repos/${repoName}/contributors?access_token=${accessToken}&anon=1&page=${page}&per_page=100`,
    method: "get",
    headers: {
      Authorization: "OAUTH-TOKEN",
      Accept: "application/json"
    }
  });
  let contributions = response && response.data ? response.data.reduce((acc, contributor) => acc + contributor.contributions, 0) : 0;
  if (response.data.length < 100) return contributions;
  return contributions + (await getCommitsCount(page + 1, accessToken, repoName));
};

const getOpenPullRequestCount = async (page, accessToken, repoName) => {
  const { response, error } = await fetch({
    url: `https://api.github.com/repos/${repoName}/pulls?state=open?access_token=${accessToken}&anon=1&page=${page}&per_page=100`,
    method: "get",
    headers: {
      Authorization: "OAUTH-TOKEN",
      Accept: "application/json"
    }
  });
  let count = response && response.data ? response.data.length : 0;
  if (count < 100) return count;
  return count + (await getOpenPullRequestCount(page + 1, accessToken, repoName));
};

const getReadMeText = async (accessToken, repoName) => {
  const { response, error } = await fetch({
    url: `https://api.github.com/repos/${repoName}/readme?access_token=${accessToken}`,
    method: "get",
    headers: {
      Authorization: "OAUTH-TOKEN",
      Accept: "application/vnd.github.VERSION.raw"
    }
  });
  return response && response.data ? response.data : "";
};
