import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory message.
 * @function Congrats
 * @param {Object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` props are false).
 */
const Congrats = props => {
  const { success } = props;
  if (success) {
    return (
      <div data-test-id="component-congrats">
        <span data-test-id="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  }
  return <div data-test-id="component-congrats" />;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
