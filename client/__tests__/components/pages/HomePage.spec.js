import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import HomePage from "components/pages/HomePage";

describe("HomePage page ", () => {
  it("should render correctly", () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<HomePage />);
    expect(result).toMatchSnapshot();
  });
});
