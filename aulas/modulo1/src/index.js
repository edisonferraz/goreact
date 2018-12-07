import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

class App extends Component {
  state = {
    counter: 0,
  };

  componentDidMount = () => {
    console.log('componentDidMount');
  };

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;

    return (
      <Fragment>
        <h1>Hello</h1>
        <h2>{counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
