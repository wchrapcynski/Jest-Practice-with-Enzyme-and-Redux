import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../../utils/utils";
import ListItem from "./listItem";

describe("List Item component", () => {
  describe("Checking proptypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        description: "Example Description",
      };
      const propErrors = checkProps(ListItem, expectedProps);
      expect(propErrors).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        description: "Example Description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("should render without errors", () => {
      const component = findByTestAttribute(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });
    it("should render a title", () => {
      const title = findByTestAttribute(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("should render a description", () => {
      const description = findByTestAttribute(wrapper, "componentDescription");
      expect(description.length).toBe(1);
    });
  });
  describe("Component does not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: "Example Description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("should NOT render anything", () => {
      const component = findByTestAttribute(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
