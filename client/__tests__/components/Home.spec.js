import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Home from "components/Home";

describe("Home page ", () => {
  it("should render correctly", () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Home />);
    expect(result).toMatchSnapshot();
  });
});
