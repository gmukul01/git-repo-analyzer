import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { fetchUserDetails } from "actions/user";
import { connect } from "react-redux";

import HomePage from "containers/pages/HomePage";
import LandingPage from "containers/pages/LandingPage";

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
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/home" component={HomePage} isAuthenticated={isUserLoggedIn} />
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
