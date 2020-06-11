import React from "react";
import { shallow } from "enzyme";
import Headline from "./headline";

import { findByTestAttribute, checkProps } from "./../../../utils/utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking proptypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        description: "Test Description",
      };
      const propsError = checkProps(Headline, expectedProps)
      expect(propsError).toBeUndefined();
    });
  });
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = { header: "Test Header", description: "Test Description" };
      wrapper = setup(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAttribute(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("should render an h1", () => {
      const component = findByTestAttribute(wrapper, "header");
      expect(component.length).toBe(1);
    });
    it("should render description", () => {
      const component = findByTestAttribute(wrapper, "description");
      expect(component.length).toBe(1);
    });
  });
  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    it("should not render", () => {
      const component = findByTestAttribute(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
