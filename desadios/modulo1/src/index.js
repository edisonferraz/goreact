import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './styles/main.scss';

import Header from './components/Header';
import Post from './components/Post';

import { mockPosts } from './mock/mockPosts';

class App extends Component {
  state = {
    posts: mockPosts,
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />

        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
