import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { fetchUserDetails } from "actions/user";
import { connect } from "react-redux";

import SearchPage from "containers/pages/SearchPage";
import HomePage from "containers/pages/HomePage";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <div>
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        </div>
      )
    }
  />
);

export class Routes extends React.Component {
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

const mapStateToProps = state => ({
  isUserLoggedIn: state.user ? state.user.name : undefined
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchUserDetails
    }
  )(Routes)
);
