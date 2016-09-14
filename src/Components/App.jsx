import React from 'react';
import { connect } from 'react-redux';

const AppChild = ({
  test,
  onClick
}) => {
  return (
    <div>
    <p>
    {test}
    </p>
    <button onClick={onClick}>Click me!</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({
        type: 'CHANGE_TEXT',
        text: 'Inny tekst!'
      })
    }
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppChild);

export default App;
