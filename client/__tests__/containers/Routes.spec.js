import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";

import { fetchUserDetails } from "actions/user";
import Routes from "containers/Routes";

const mockStore = configureMockStore();
describe("Routes Container", () => {
  let wrapper, store;
  const initialState = {
    user: {
      name: "dummy name"
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(
      <MemoryRouter>
        <Routes store={store} />
      </MemoryRouter>
    );
  });

  xit("should map isUserLoggedIn prop to user name in the state", () => {
    expect(wrapper.prop("isUserLoggedIn")).toBe(initialState.user.name);
  });

  xit("should map isUserLoggedIn prop to undefined if user name is not present in the state", () => {
    const initialState = {};
    store = mockStore(initialState);
    wrapper = shallow(<Routes store={store} />);
    expect(wrapper.prop("userName")).toBeUndefined();
  });

  xit("should dispatch fetchUserDetails action", () => {
    wrapper.prop("fetchRepoDetails")();
    const actions = store.getActions();
    expect(actions).toEqual([fetchUserDetails()]);
  });
});
