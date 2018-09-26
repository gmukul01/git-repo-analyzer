import { connect } from "react-redux";

import SearchPage from "components/pages/SearchPage";
import { addToSearchHistory, fetchRepoDetails, fetchSearchHistory } from "actions/search";

const mapStateToProps = state => ({
  userName: state.user ? state.user.name : undefined,
  history: state.search.history,
  searchResult: state.search.result,
  isLoading: state.search.isLoading,
  errorMessage: state.search.errorMessage
});

export default connect(
  mapStateToProps,
  {
    addToSearchHistory,
    fetchSearchHistory,
    fetchRepoDetails
  }
)(SearchPage);
