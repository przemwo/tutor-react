import React from 'react';

// Reducer
const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1 };
    case 'decrement':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

class Test extends React.Component {
  // Local state - act as a local store
  state = counter(undefined, {});

  // Dispatcher
  dispatch = (action) => {
    this.setState(prevState => counter(prevState, action));
  };

  increment = () => {
    this.dispatch({ type: 'increment' });
  };

  decrement = () => {
    this.dispatch({ type: 'decrement' });
  };

  render () {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Test;
