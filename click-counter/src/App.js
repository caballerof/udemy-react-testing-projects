import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      msg: 'The counter is currently:'
    };
  }

  changeCounter({ operator = '+', val = 1 } = {}) {
    let { counter, msg } = this.state;
    msg = 'The counter is currently:';

    switch(operator) {
      case '+':
        counter += val;
        break;
      default:
        counter -= val;
        break;
    }

    if (counter < 0) {
      counter = 0;
      msg = "The counter can't go below zero";
    }

    this.setState({ msg, counter });
  }

  render() {
    const { counter, msg } = this.state;
    return (
      <div className="App" data-test-id="component-test">
        <h1 data-test-id="counter-display">{counter >= 0 ? `${msg} ${counter}` : msg}</h1>
        <button
          className="increment"
          data-test-id="increment-button"
          onClick={() => this.changeCounter()}
          >
          Increment counter
        </button>
        <button
          data-test-id="decrement-button"
          className="decrement"
          onClick={ () => this.changeCounter({ operator: '-'}) }
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
