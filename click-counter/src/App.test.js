import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
* Factory function to create a shallowWrapper for the App component
* @function setup
* @param {Object} props - Component props specific to this setup.
* @param {Object} state - Initial state for setup.
* @return {ShallowWrapper} Wrapper enzyme object.
*/
const setup = ({props = {}, state = null} = {}) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper
};

/**
* Return ShallowWrapper containing node(s) with given data-test value.
* @param {shallowWrapper} wrapper - Enzyme shallow wrapper to search within.
* @param {string} val - Value of data-test attribute for search.
* @return {ShallowWrapper} 
*/
const findByTestIdAttr = ({wrapper, val = ''}) => {
  return wrapper.find(`[data-test-id="${val}"]`);
}

describe('Test counter functionalities', () => {
  test('Renders without error' ,() => {
    const wrapper = setup();
    const component = findByTestIdAttr({ wrapper, val: 'component-test' });
    expect(component.length).toBe(1);
  });

  test('Renders increment button', () => {
    const wrapper = setup();
    const component = findByTestIdAttr({ wrapper, val: 'increment-button' });
    expect(component.length).toBe(1);
  });

  test('Renders counter display', () => {
    const wrapper = setup();
    const component = findByTestIdAttr({ wrapper, val: 'counter-display' });
    expect(component.length).toBe(1);
  });

  test('Counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
  });

  test('Clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setup({ state: { counter } });
    const button = findByTestIdAttr({ wrapper, val: 'increment-button' });
    button.simulate('click');

    const counterDisplay = findByTestIdAttr({ wrapper, val: 'counter-display' });
    expect(counterDisplay.text()).toContain(counter + 1);
  });

  test('Renders decrement button', () => {
    const wrapper = setup();
    const element = findByTestIdAttr({ wrapper, val: 'decrement-button' });
    expect(element.length).toBe(1);
  });

  test('Clicking button decrement counter display', () => {
    const counter = 5;
    const wrapper = setup({ state: { counter }});
    const button = findByTestIdAttr({ wrapper, val: 'decrement-button' });
    button.simulate('click');

    const displayCounter = findByTestIdAttr({ wrapper, val: 'counter-display' });
    expect(displayCounter.text()).toContain(counter - 1);
  });

  test('Check for no negative numbers', () => {
    const counter = 0;
    const wrapper = setup({ state: { counter }});
    const button = findByTestIdAttr({ wrapper, val: 'decrement-button' });
    button.simulate('click');

    const displayCounter = findByTestIdAttr({ wrapper, val: 'counter-display' });
    expect(displayCounter.text()).toBe("The counter can't go below zero 0");
  });

  test('Restart display counter on increment', () => {
    const wrapper = setup();
    const decrementButton = findByTestIdAttr({ wrapper, val: 'decrement-button' });
    const incrementButton = findByTestIdAttr({ wrapper, val: 'increment-button' });
    const displayCounter = findByTestIdAttr({ wrapper, val: 'counter-display'});
    decrementButton.simulate('click'); 
    incrementButton.simulate('click');

    expect(displayCounter.text()).toContain(0);
  });
});
