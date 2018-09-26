import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUserDetails } from "actions/user";
import Routes from "routes/Routes";

const mapStateToProps = state => ({
  isUserLoggedIn: state.user ? state.user.name : undefined
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchUserDetails
    }
  )(Routes)
);
