import React, { PureComponent } from "react";

export default class Home extends PureComponent {
  render() {
    return (
      <header>
        <h1>Git Repo Analyzer</h1>
        <a href="/auth/github">Login Link</a>
      </header>
    );
  }
}
