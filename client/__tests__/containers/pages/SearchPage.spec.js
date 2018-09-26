import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import SearchPage from "containers/pages/SearchPage";
import { addToSearchHistory, fetchRepoDetails, fetchSearchHistory } from "actions/search";

const mockStore = configureMockStore();
describe("SearchPage Container", () => {
  let wrapper, store;
  const initialState = {
    search: {
      history: ["dummyRepo"],
      result: { total: 3, items: ["dummy"] },
      isLoading: false,
      errorMessage: "Error Message"
    },
    user: {
      name: "dummy name"
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<SearchPage store={store} />);
  });

  it("should map props from state", () => {
    expect(wrapper.prop("userName")).toBe(initialState.user.name);
    expect(wrapper.prop("history")).toBe(initialState.search.history);
    expect(wrapper.prop("searchResult")).toBe(initialState.search.result);
    expect(wrapper.prop("isLoading")).toBe(initialState.search.isLoading);
    expect(wrapper.prop("errorMessage")).toBe(initialState.search.errorMessage);
  });

  it("should map isUserLoggedIn prop to undefined if user name is not there in the store", () => {
    const initialState = {
      search: {}
    };
    store = mockStore(initialState);
    wrapper = shallow(<SearchPage store={store} />);
    expect(wrapper.prop("userName")).toBeUndefined();
  });

  it("should dispatch addToSearchHistory action", () => {
    wrapper.prop("addToSearchHistory")();
    const actions = store.getActions();
    expect(actions).toEqual([addToSearchHistory()]);
  });

  it("should dispatch fetchSearchHistory action", () => {
    wrapper.prop("fetchSearchHistory")();
    const actions = store.getActions();
    expect(actions).toEqual([fetchSearchHistory()]);
  });

  it("should dispatch fetchRepoDetails action", () => {
    wrapper.prop("fetchRepoDetails")();
    const actions = store.getActions();
    expect(actions).toEqual([fetchRepoDetails()]);
  });
});
