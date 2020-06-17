import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttribute, testStore } from "./../utils/utils";

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      postsReducer: {
        posts: [
          { title: "Exampel Title 1", body: "Some text 1" },
          { title: "Exampel Title 2", body: "Some text 2" },
          { title: "Exampel Title 3", body: "Some text 3" },
        ],
      },
    };
    wrapper = setup(initialState);
    console.log(wrapper.debug());
  });
  it("should render without errors", () => {
    const component = findByTestAttribute(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
