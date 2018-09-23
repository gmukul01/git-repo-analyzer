import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";

export default class extends PureComponent {
  render() {
    return (
      <nav className="header">
        <Link to="/" className="logo">
          Git Repo Analyzer
        </Link>
        <Link to="/logout">Logout</Link>
      </nav>
    );
  }
}
