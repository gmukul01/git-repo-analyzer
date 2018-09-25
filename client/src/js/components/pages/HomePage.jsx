import React, { Component, Fragment } from "react";
import Header from "containers/Header";
import SearchForm from "containers/search/SearchForm";
import SearchResult from "containers/search/SearchResult";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="content">
          <SearchForm />
          <SearchResult />
        </section>
      </Fragment>
    );
  }
}
