import React from "react";
import { shallow } from "enzyme";

import SearchPage from "containers/pages/SearchPage";
import HomePage from "containers/pages/HomePage";
import Routes from "routes/Routes";

describe("Routes Component", () => {
  let wrapper;

  it("should render Home component if path is '/'", () => {
    wrapper = shallow(<Routes isUserLoggedIn />);
    expect(wrapper.find({ path: "/" }).prop("component")).toEqual(HomePage);
  });

  it("should render SearchPage component if path is '/search'", () => {
    wrapper = shallow(<Routes isUserLoggedIn />);
    expect(wrapper.find({ path: "/search" }).prop("component")).toEqual(SearchPage);
  });

  it("should call fetchUserDetails when user is not logged in'", () => {
    const props = { isUserLoggedIn: false, fetchUserDetails: jest.fn() };
    wrapper = shallow(<Routes {...props} />);
    expect(props.fetchUserDetails.mock.calls.length).toEqual(1);
  });

  it("should not call fetchUserDetails when user is logged in'", () => {
    const props = { isUserLoggedIn: true, fetchUserDetails: jest.fn() };
    wrapper = shallow(<Routes {...props} />);
    expect(props.fetchUserDetails.mock.calls.length).toEqual(0);
  });
});
