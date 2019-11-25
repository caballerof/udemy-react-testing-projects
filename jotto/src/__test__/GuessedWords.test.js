import React from 'react';
import { shallow } from 'enzyme';
/** Local modules */
import findByTestAttr, { testProp, testPropWithError } from './utils';
import GuessedWords from '../components/GuessedWords';

/**
* Deafult props for the component.
*/
const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}],
};

/**
 * Factory function to create a shallowWrapper for the App component.
 * @function setup
 * @param {Object} props - Component props specific to this setup.
 */
const setup = (props = {}) =>  {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
} 

describe('Testing GuessedWords component', () => {
  test('Does not throw warning with expected props', () => {
    testProp({  component: GuessedWords,  values: defaultProps });
  });

  describe('If there are no words guessed', () => {
    let wrapper;
    beforeEach( () => wrapper = setup({ guessedWords: [] }));

    test('Renders without errors', () => {
      const component = findByTestAttr({wrapper, attr: 'component-guessed-words'});

      expect(component.length).toBe(1);
    });

    test('Renders instructions to guess a word', () => {
      const component = findByTestAttr({wrapper, attr: 'component-guessed-instructions'});

      expect(component.text().length).toBeGreaterThan(0);
    });
  });

  describe('If there are words guessed', () => {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3},
      { guessedWord: 'agile', letterMatchCount: 1},
      { guessedWord: 'party', letterMatchCount: 5},
    ];
    let wrapper;
    beforeEach( () => wrapper = setup({ guessedWords: [...guessedWords] }));

    test('Renders without error', () => {
      const component = findByTestAttr({wrapper, attr: 'component-guessed-words'});

      expect(component.length).toBe(1);
    });
    test('Renders "Guessed words" section', () => {
      const guessedWordsNode = findByTestAttr({ wrapper, attr: 'element-guessed-words'});

      expect(guessedWordsNode.length).toBe(1);
    });
    test('Correct number of guessed words', () => {
      const guessedWordsNodes = findByTestAttr({ wrapper, attr: 'element-guessed-word'});

      expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
  });
});
