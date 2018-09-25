import { connect } from "react-redux";

import SearchForm from "components/search/SearchForm";
import { fetchRepoDetails } from "actions/search";

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  isFound: !state.search.errorMessage
});

export default connect(
  mapStateToProps,
  { fetchRepoDetails }
)(SearchForm);
