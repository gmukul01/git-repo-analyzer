import { connect } from "react-redux";

import Header from "components/Header";

const mapStateToProps = state => ({
  userName: state.user ? state.user.name : undefined
});

export default connect(
  mapStateToProps,
  null
)(Header);
