import React from "react";
import { shallow } from "enzyme";

import HomePage from "containers/pages/HomePage";
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
  it("should render HomePage component if path is '/'", () => {
    expect(wrapper.find({ path: "/" }).prop("component")).toEqual(HomePage);
  });
});
