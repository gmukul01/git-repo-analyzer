import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import SearchForm from "components/search/SearchForm";

describe("SearchForm page ", () => {
  let wrapper;
  const mockFetchRepoDetails = jest.fn();
  it("should match snapshot", () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<SearchForm fetchRepoDetails={mockFetchRepoDetails} />);
    expect(result).toMatchSnapshot();
  });

  beforeEach(() => {
    wrapper = shallow(<SearchForm fetchRepoDetails={mockFetchRepoDetails} />);
  });

  it("should call mockFetchRepoDetails on click of search button", () => {
    const evt = {
      preventDefault: jest.fn()
    };
    wrapper.find("button").simulate("click", evt);
    expect(mockFetchRepoDetails.mock.calls.length).toEqual(1);
    expect(evt.preventDefault.mock.calls.length).toEqual(1);
  });
});
