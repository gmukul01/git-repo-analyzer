import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { fetchUserDetails } from "actions/user";
import { connect } from "react-redux";

import PrivateRoute from "routes/PrivateRoute";
import SearchPage from "containers/pages/SearchPage";
import HomePage from "containers/pages/HomePage";

export default class Routes extends React.Component {
  componentDidMount() {
    !this.props.isUserLoggedIn && this.props.fetchUserDetails();
  }

  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute path="/search" component={SearchPage} isAuthenticated={isUserLoggedIn} />
      </Switch>
    );
  }
}
