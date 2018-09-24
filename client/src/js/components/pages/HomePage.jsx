import React, { Component, Fragment } from "react";
import Header from "containers/Header";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="content">Hey {this.props.userName}</section>
      </Fragment>
    );
  }
}
