import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import HomePage from "containers/pages/HomePage";

const mockStore = configureMockStore();
describe("HomePage Container", () => {
  let wrapper, store;

  it("should map isUserLoggedIn prop to user name", () => {
    const initialState = {
      user: {
        name: "dummy name"
      }
    };
    store = mockStore(initialState);
    wrapper = shallow(<HomePage store={store} />);
    expect(wrapper.prop("isUserLoggedIn")).toBe(initialState.user.name);
  });

  it("should map isUserLoggedIn prop to undefined if user name is not there in the store", () => {
    const initialState = {};
    store = mockStore(initialState);
    wrapper = shallow(<HomePage store={store} />);
    expect(wrapper.prop("isUserLoggedIn")).toBeUndefined();
  });
});
