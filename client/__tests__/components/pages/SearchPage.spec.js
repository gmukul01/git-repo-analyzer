import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import SearchPage from "components/pages/SearchPage";

describe("SearchPage page ", () => {
  it("should render correctly", () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<SearchPage />);
    expect(result).toMatchSnapshot();
  });
});
