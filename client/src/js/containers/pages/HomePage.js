import { connect } from "react-redux";

import HomePage from "components/pages/HomePage";

const mapStateToProps = state => ({
  isUserLoggedIn: state.user ? state.user.name : undefined
});

export default connect(
  mapStateToProps,
  null
)(HomePage);
