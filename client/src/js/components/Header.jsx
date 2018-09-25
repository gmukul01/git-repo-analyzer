import React, { PureComponent } from "react";
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
          <span>
            {userName} <a href={LOGOUT_URL}>Logout</a>
          </span>
        )}
      </nav>
    );
  }
}
