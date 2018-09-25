import { connect } from "react-redux";

import SearchForm from "components/search/Searchresult";

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  errorMessage: state.search.errorMessage,
  result: state.search.result
});

export default connect(
  mapStateToProps,
  null
)(SearchForm);
