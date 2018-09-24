import { connect } from "react-redux";

import LandingPage from "components/pages/LandingPage";

const mapStateToProps = state => ({
  isUserLoggedIn: state.user ? state.user.name : undefined
});

export default connect(
  mapStateToProps,
  null
)(LandingPage);
