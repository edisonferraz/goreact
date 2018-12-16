import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';

import Map from './components/Map';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Map />
  </Fragment>
);

export default App;
