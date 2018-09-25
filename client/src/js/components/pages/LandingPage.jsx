import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

import Header from "containers/Header";
import { GITHUB_LOGIN_URL } from "constants/urls";

export default class LandingPage extends Component {
  render() {
    const { from } = this.props.location.state || { from: undefined },
      { isUserLoggedIn } = this.props;

    if (from && isUserLoggedIn) {
      return <Redirect to={from} />;
    }

    return (
      <Fragment>
        <Header />
        <section className="content">
          <h1>This website will give statistics about repos which are hosted on Github</h1>
          <a className="btn btn-social btn-github" href={GITHUB_LOGIN_URL}>
            <span className="fa fa-github" /> Sign in with Github
          </a>
        </section>
      </Fragment>
    );
  }
}
