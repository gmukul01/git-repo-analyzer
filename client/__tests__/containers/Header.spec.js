import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import Header from "containers/Header";

const mockStore = configureMockStore();
describe("Header Container", () => {
  let wrapper, store;

  it("should map userName prop to user name in the state", () => {
    const initialState = {
      user: {
        name: "dummy name"
      }
    };
    store = mockStore(initialState);
    wrapper = shallow(<Header store={store} />);
    expect(wrapper.prop("userName")).toBe(initialState.user.name);
  });

  it("should map userName prop to undefined if user name is not there in the store", () => {
    const initialState = {};
    store = mockStore(initialState);
    wrapper = shallow(<Header store={store} />);
    expect(wrapper.prop("userName")).toBeUndefined();
  });
});
