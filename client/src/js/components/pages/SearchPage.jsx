import React, { Component, Fragment } from "react";
import ReactLoading from "react-loading";

import Header from "containers/Header";
import SearchForm from "components/search/SearchForm";
import SearchResult from "components/search/SearchResult";
import SearchHistory from "components/search/SearchHistory";

export default class SearchPage extends Component {
  componentDidMount() {
    this.props.history.length === 0 && this.props.fetchSearchHistory();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.searchResult.items && prevProps.searchResult.items.length > 0 && !this.props.searchResult.items) {
      this.props.fetchSearchHistory();
    }
  }
  render() {
    const { history, searchResult, isLoading, errorMessage, addToSearchHistory, fetchRepoDetails, fetchSearchHistory } = this.props;
    return (
      <Fragment>
        <Header />
        <section className="content">
          <SearchForm fetchRepoDetails={fetchRepoDetails} />
          {(() => {
            if (isLoading) {
              return <ReactLoading type="spinningBubbles" color="black" />;
            } else if (errorMessage) {
              return <p>{`Error : ${errorMessage}`}</p>;
            } else if (searchResult && searchResult.items && searchResult.items.length > 0) {
              return <SearchResult result={searchResult} addToSearchHistory={addToSearchHistory} />;
            }
            return <SearchHistory history={history} fetchSearchHistory={fetchSearchHistory} />;
          })()}
        </section>
      </Fragment>
    );
  }
}
