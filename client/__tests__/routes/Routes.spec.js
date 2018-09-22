import React from "react";
import { shallow } from "enzyme";

import Home from "components/Home";
import { Routes } from "routes/Routes";

describe("Routes", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });
  it("should render Home component if path is '/'", () => {
    expect(wrapper.find({ path: "/" }).prop("component")).toEqual(Home);
  });
});
