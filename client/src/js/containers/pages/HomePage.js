import { connect } from "react-redux";

import HomePage from "components/pages/HomePage";
import { addToSearchHistory, fetchSearchHistory } from "actions/search";

const mapStateToProps = state => ({
  userName: state.user ? state.user.name : undefined,
  history: state.search.history,
  searchResult: state.search.result,
  searchResult: state.search.result,
  isLoading: state.search.isLoading,
  errorMessage: state.search.errorMessage
});

export default connect(
  mapStateToProps,
  {
    fetchSearchHistory,
    addToSearchHistory
  }
)(HomePage);
