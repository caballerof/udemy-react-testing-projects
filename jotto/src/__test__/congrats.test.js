import React from "react";
import { shallow } from "enzyme";
/** Local modules */
import Congrats from "../components/Congrats";
import findByTestAttr, { testProp, testPropWithError } from "./utils";

/**
* Deafult props for the component.
*/
const defaultProps = { success: false };

/**
 * Factory function to create a shallowWrapper for the App component.
 * @function setup
 * @param {Object} props - Component props specific to this setup.
 * @return {ShallowWrapper} Wrapper enzyme object.
 */
const setup = (props = {}) =>  {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
} 

describe("Testing Congrats component", () => {
  test("Renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr({ wrapper, attr: "component-congrats" });

    expect(component.length).toBe(1);
  });

  test("Renders no text when `success` prop is false", () => {
    const wrapper = setup();
    const component = findByTestAttr({ wrapper, attr: "component-congrats" });

    expect(component.text()).toBe("");
  });

  test("Renders non-empty congrats message when `success` is true", () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr({ wrapper, attr: "congrats-message" });

    expect(component.text().length).toBeGreaterThan(0);
  });

  test("Does not throw warning with expected props", () => {
    testProp({ component: Congrats, values: {...defaultProps} });
  });

   test("Throw warning without expected props", () => {    
    testPropWithError({ component: Congrats, values: { success: 123 } });
  });
});
