import React, { Component } from "react";
import { shallow } from "enzyme";

import PrivateRoute from "routes/PrivateRoute";

describe("Private Route Component", () => {
  let privateRoute;

  beforeEach(() => {
    class DummyComponent extends Component {
      render() {
        return <div>Dummy Component</div>;
      }
    }

    privateRoute = shallow(<PrivateRoute isAuthenticated component={DummyComponent} />);
  });

  it("should render dummy component when user is authenticated", () => {
    const dummyComponentWrapper = shallow(
      <div>
        {privateRoute
          .find("Route")
          .props()
          .render()}
      </div>
    );

    expect(dummyComponentWrapper.find("DummyComponent")).toHaveLength(1);
    expect(dummyComponentWrapper.find("Redirect")).toHaveLength(0);
  });

  it("should Redirect to page when user is not authenticated", () => {
    const redirectProps = {
      location: "/DummyLocation"
    };

    privateRoute.setProps({
      isAuthenticated: false
    });

    const RedirectComponentWrapper = shallow(
      <div>
        {privateRoute
          .find("Route")
          .props()
          .render(redirectProps)}
      </div>
    );

    expect(RedirectComponentWrapper.find("DummyComponent")).toHaveLength(0);
    expect(RedirectComponentWrapper.find("Redirect")).toHaveLength(1);
    expect(RedirectComponentWrapper.find("Redirect").props().to.state.from).toEqual(redirectProps.location);
  });
});
