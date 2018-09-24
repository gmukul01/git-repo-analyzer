import React from "react";
import { shallow } from "enzyme";

import LandingPage from "containers/pages/LandingPage";
import { Routes } from "routes/Routes";

describe("Routes", () => {
  let wrapper;
  const initialProps = {
    isUserLoggedIn: "demo",
    fetchUserDetails: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<Routes {...initialProps} />);
  });
  it("should render LandingPage component if path is '/'", () => {
    expect(wrapper.find({ path: "/" }).prop("component")).toEqual(LandingPage);
  });
});
