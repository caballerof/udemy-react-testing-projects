import checkPropTypes from "check-prop-types";

/**
 * Return ShallowWrapper containing node(s) with given data-test value.
 * @param {shallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
const findByTestAttr = ({ wrapper, attr }) =>
  wrapper.find(`[data-test-id="${attr}"]`);

/**
 * @function testProp
 * @param {Object} Object containing attributes.
 * @param {object} component Map of name to a ReactPropType.
 * @param {object} values Runtime values that need to be type-checked.
 */
export const testProp = ({ component, values }) => {
  const propError = checkPropTypes(
    component.propTypes,
    values,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

/**
 * @function testPropWithError
 * @param {Object} Object containing attributes.
 * @param {object} component Map of name to a ReactPropType.
 * @param {object} values Runtime values that need to be type-checked.
 */
export const testPropWithError = ({ component, values }) => {
  const propError = checkPropTypes(
    component.propTypes,
    values,
    "prop",
    component.name
  );

  expect(propError).not.toBeUndefined();
};

export default findByTestAttr;
