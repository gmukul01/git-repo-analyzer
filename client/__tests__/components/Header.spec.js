import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Header from "components/Header";

describe("Header Component", () => {
  let wrapper;
  const initialProps = {
    userName: "dummyUserName"
  };
  it("should match snapshot when user is logged in", () => {
    const renderer = new ShallowRenderer(),
      result = renderer.render(<Header {...initialProps} />);
    expect(result).toMatchSnapshot();
  });

  it("should match snapshot when source is not present in props", () => {
    const props = {
        ...initialProps,
        userName: undefined
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<Header {...props} />);
    expect(result).toMatchSnapshot();
  });
});
