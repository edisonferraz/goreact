import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotron';

import Map from './components/Map';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Map />
    <ToastContainer />
  </Provider>
);

export default App;
