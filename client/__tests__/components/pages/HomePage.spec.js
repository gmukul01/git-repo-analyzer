import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import HomePage from "components/pages/HomePage";

describe("HomePage Component", () => {
  const initialProps = {
    location: {
      state: {
        from: "/"
      }
    },
    isUserLoggedIn: true
  };

  it("should match snapshot when user is not logged in", () => {
    const props = {
        ...initialProps,
        isUserLoggedIn: false
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<HomePage {...props} />);
    expect(result).toMatchSnapshot();
  });

  it("should match snapshot when user is logged in and 'from' is available in the location", () => {
    const renderer = new ShallowRenderer(),
      result = renderer.render(<HomePage {...initialProps} />);
    expect(result).toMatchSnapshot();
  });

  it("should match snapshot when user is logged in and there is no 'from' is available in the location", () => {
    const props = {
        ...initialProps,
        location: {}
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<HomePage {...props} />);
    expect(result).toMatchSnapshot();
  });
});
