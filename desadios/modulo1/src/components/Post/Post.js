import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './components/PostHeader';

const Post = ({ post }) => (
  <div className="post">
    <PostHeader post={post} />
    <p>{post.content}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
