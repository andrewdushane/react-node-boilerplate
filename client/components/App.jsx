import React from 'react';

import { Provider } from 'react-redux';

import Routes from '../routes';

import store from '../store';

import '../styles/main.scss';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
