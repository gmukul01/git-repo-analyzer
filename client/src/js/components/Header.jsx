import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class extends PureComponent {
  onClick() {
    fetch("/auth/logout").then(data => console.log("DATA =>", data));
  }
  render() {
    return (
      <nav className="header">
        <Link to="/" className="logo">
          Git Repo Analyzer
        </Link>
        <a onClick={this.onClick}>Logout</a>
      </nav>
    );
  }
}
