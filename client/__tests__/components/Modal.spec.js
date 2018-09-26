import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import Modal from "components/Modal";

describe("Modal Component", () => {
  let wrapper;
  const initialProps = {
    modalId: "dummyId",
    modalHeader: "dummyHeader"
  };
  it("should match snapshot when source is present in props", () => {
    const props = {
        ...initialProps,
        readme: "### Dummy Readme"
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<Modal {...props} />);
    expect(result).toMatchSnapshot();
  });

  it("should match snapshot when source is not present in props", () => {
    const renderer = new ShallowRenderer(),
      result = renderer.render(<Modal {...initialProps} />);
    expect(result).toMatchSnapshot();
  });
});
