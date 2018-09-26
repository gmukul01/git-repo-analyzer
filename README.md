# Git-Repo analyzer

##### To start:

1. clone the repo `git clone https://github.com/gmukul01/git-repo-analyzer.git`
2. go to the directory `cd git-repo-analyzer`
3. install dependencies `npm install`
4. start the app `npm run serve`
5. build `npm run build`

> App will start at port 3000

##### To use the app:

Login with github account.

##### Tech stack:

- React
- Redux
- Express
- Mongoose
- MongoDb
- Jest
- Enzyme

##### Design

When you search for repo you will see **search results** and if you click on any repo then you will see **search history** which is sorted in reverse chronological order.

##### Assumptions:

All credentials and client ids should be configured in `.env` file.

##### Limitations:

- No pagiantion
- No unit test cases for back end as of now
- Github api has call limits. For more info - [Check here](https://developer.github.com/v3/rate_limit/#rate-limit)
