import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from '../components/Congrats';
import findByTestAttr from './utils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
* Factory function to create a shallowWrapper for the App component.
* @function setup
* @param {Object} props - Component props specific to this setup.
* @return {ShallowWrapper} Wrapper enzyme object.
*/
const setup = ({ props = {} } = {}) => shallow(<Congrats {...props} />);

describe('Testing Congrats component', () => {
  test('Renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr({ wrapper, attr: 'component-congrats' });

    expect(component.length).toBe(1);
  });

  test('Renders no text when `success` prop is false', () => {
    const wrapper = setup({ props: {success: false} });
    const component = findByTestAttr({ wrapper, attr: 'component-congrats' });

    expect(component.text()).toBe('');
  });

  test('Renders non-empty congrats message when `success` is true', () => {
    const wrapper = setup({ props: {success: true} });
    const component = findByTestAttr({ wrapper, attr: 'congrats-message' });

    expect(component.text().length).toBeGreaterThan(0);
  });
});
