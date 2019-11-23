/**
 * Return ShallowWrapper containing node(s) with given data-test value.
 * @param {shallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
const findByTestAttr = ({ wrapper, attr }) =>
  wrapper.find(`[data-test-id="${attr}"]`);

export default findByTestAttr;
