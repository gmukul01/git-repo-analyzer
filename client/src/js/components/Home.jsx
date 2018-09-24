import React, { PureComponent, Fragment } from "react";
import Header from "./Header";

export default class Home extends PureComponent {
  onClick() {
    fetch("/auth/user").then(data => console.log("DATA =>", data));
  }
  render() {
    return (
      <Fragment>
        <Header />
        <section className="content">
          <h1>This website will give statistics about repos which are hosted on Github</h1>
          <a className="btn btn-social btn-github" href="/auth/github">
            <span className="fa fa-github" /> Sign in with Github
          </a>
          <button onClick={this.onClick}>Click ME</button>
        </section>
      </Fragment>
    );
  }
}
