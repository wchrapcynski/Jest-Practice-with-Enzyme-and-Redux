import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../../utils/utils";
import SharedButton from "./button";
import { EnzymeAdapter } from "enzyme";

describe("SharedButton component", () => {
  describe("Checking proptypes", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        buttonText: "Example Text",
        emitEvent: () => {},
      };
      const propError = checkProps(SharedButton, expectedProps);
      expect(propError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Text",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("should render a button", () => {
      const button = findByTestAttribute(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
