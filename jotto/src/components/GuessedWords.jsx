import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  const { guessedWords } = props;
  let content;
  content = guessedWords.length ? (
    <div data-test-id="element-guessed-words">
      <h3>Guessed Words</h3>
      <table>
        <thead>
          <tr>
            <th>Guess</th>
          </tr>
          <tr>
            <th>Matching letters</th>
          </tr>
        </thead>
        <tbody>
          {guessedWords.map((word, index) => {
            return (
              <tr data-test-id="element-guessed-word" key={`${index}-${word}`}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <span data-test-id="component-guessed-instructions">
      Try to guess the secret word!
    </span>
  );

  return <div data-test-id="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
