import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import Routes from "routes/Routes";
import history from "util/history";

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
);
module.hot.accept();
