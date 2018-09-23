import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Header from "components/Header";

describe("Header page ", () => {
  it("should render correctly", () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Header />);
    expect(result).toMatchSnapshot();
  });
});
