import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import SearchResult from "components/search/SearchResult";

describe("SearchResult Component", () => {
  const initialProps = {
    result: {
      items: [
        {
          id: "dummyId1",
          owner: { login: "dummyUserName" },
          openPullRequenCount: 1,
          name: "dummyRepoName1",
          url: "dummyUrl1"
        },
        {
          id: "dummyId2",
          owner: { login: "dummyUserName2" },
          openPullRequenCount: 2,
          name: "dummyRepoName2",
          url: "dummyUrl2"
        }
      ]
    }
  };

  it("should match snapshot", () => {
    const renderer = new ShallowRenderer(),
      result = renderer.render(<SearchResult {...initialProps} />);
    expect(result).toMatchSnapshot();
  });

  it("should call addToSearchHistory action on click of any repo", () => {
    const props = { ...initialProps, addToSearchHistory: jest.fn() },
      wrapper = shallow(<SearchResult {...props} />),
      evnt = { preventDefault: jest.fn() };
    wrapper.findWhere(node => node.key() === initialProps.result.items[0].id).simulate("click", evnt, initialProps.result.items[0]);
    expect(props.addToSearchHistory.mock.calls.length).toEqual(1);
  });
});
