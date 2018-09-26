import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import SearchPage from "components/pages/SearchPage";

describe("SearchPage Component", () => {
  const initialProps = {
    history: ["dummyHistory"],
    searchResult: {
      items: ["dummyItems"]
    },
    addToSearchHistory: jest.fn(),
    fetchRepoDetails: jest.fn(),
    fetchSearchHistory: jest.fn()
  };

  it("should call mockFetchSearchHistory when history is empty on mount", () => {
    const props = {
        ...initialProps,
        history: [],
        fetchSearchHistory: jest.fn()
      },
      wrapper = shallow(<SearchPage {...props} />);
    expect(props.fetchSearchHistory.mock.calls.length).toEqual(1);
  });

  it("should not call mockFetchSearchHistory when history is already present on mount", () => {
    const props = {
        ...initialProps,
        fetchSearchHistory: jest.fn()
      },
      wrapper = shallow(<SearchPage {...initialProps} />);
    expect(props.fetchSearchHistory.mock.calls.length).toEqual(0);
  });

  it("should match snapshot with when isLoading is true", () => {
    const props = {
        ...initialProps,
        isLoading: true,
        errorMessage: false
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<SearchPage {...props} />);
    expect(result).toMatchSnapshot();
  });

  it("should match snapshot with when errorMessage is true and isLoading is false", () => {
    const props = {
        ...initialProps,
        isLoading: false,
        errorMessage: true
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<SearchPage {...props} />);
    expect(result).toMatchSnapshot();
  });

  it("should match snapshot with when search result is present", () => {
    const props = {
        ...initialProps,
        isLoading: false,
        errorMessage: false
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<SearchPage {...props} />);
    expect(result).toMatchSnapshot();
  });

  it("should match snapshot with when search history is present", () => {
    const props = {
        ...initialProps,
        isLoading: false,
        errorMessage: false,
        searchResult: undefined
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<SearchPage {...props} />);
    expect(result).toMatchSnapshot();
  });

  it("should match snapshot with when search history and result is not present", () => {
    const props = {
        ...initialProps,
        isLoading: false,
        errorMessage: false,
        searchResult: undefined,
        history: undefined
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<SearchPage {...props} />);
    expect(result).toMatchSnapshot();
  });
});
