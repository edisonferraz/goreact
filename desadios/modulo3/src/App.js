import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';

import Map from './components/Map';

import GlobalStyle from './styles/global';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Map />
  </Provider>
);

export default App;
