import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
// import App from './Components/App';
// import Test from './components/Test';
import FlexTest from './Components/FlexTest';
import { loadProjectMembers } from './actions/actions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadProjectMembers());

ReactDOM.render(
  <Provider store={store}>
    <FlexTest />
  </Provider>,
  document.getElementById('app')
);
