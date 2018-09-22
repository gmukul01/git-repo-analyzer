import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import Home from "components/Home";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
