import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";

import { LOGOUT_URL } from "constants/urls";

export default class Header extends PureComponent {
  render() {
    const { userName } = this.props;
    return (
      <nav className="header">
        <Link to="/" className="logo">
          Git Repo Analyzer
        </Link>

        {userName && (
          <Fragment>
            <section>
              <Link to="/">Home</Link>
              <Link to="/search">Search</Link>
              <a href={LOGOUT_URL}>Logout</a>
            </section>

            <span>Hello {userName}</span>
          </Fragment>
        )}
      </nav>
    );
  }
}
