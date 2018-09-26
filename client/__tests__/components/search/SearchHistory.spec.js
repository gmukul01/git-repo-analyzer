import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import SearchHistory from "components/search/SearchHistory";

describe("SearchHistory Component", () => {
  const initialProps = {
    history: [
      {
        repoName: "dummyRepoName1",
        commitCount: 10,
        openPullRequenCount: 1,
        htmlUrl: "dummyUrl1",
        updated_at: "updated_at1"
      },
      {
        repoName: "dummyRepoName2",
        commitCount: 10,
        openPullRequenCount: 1,
        htmlUrl: "dummyUrl2",
        updated_at: "updated_at2"
      }
    ]
  };

  it("should match snapshot", () => {
    const renderer = new ShallowRenderer(),
      result = renderer.render(<SearchHistory {...initialProps} />);
    expect(result).toMatchSnapshot();
  });
});
