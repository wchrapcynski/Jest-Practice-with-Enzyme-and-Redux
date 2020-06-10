import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute } from "./../../../utils/utils";
import Header from "./header";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("should render without errors", () => {
    // const componenet = shallow(<Header />)
    // const wrapper = component.find(`[data-test='headerComponent']`)
    // console.log(component.debug());
    const wrapper = findByTestAttribute(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    // console.log(component.debug());
    const logo = findByTestAttribute(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
