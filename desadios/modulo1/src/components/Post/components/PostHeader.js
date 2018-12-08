import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ post }) => (
  <div className="post-header">
    <img src={post.avatarUrl} alt={post.name} />
    <div>
      <strong>{post.name}</strong>
      <span>{post.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
