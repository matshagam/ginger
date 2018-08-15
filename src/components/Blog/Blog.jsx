import React from 'react';

import { Post } from './components/Post.jsx';

export const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-container">
        <Post />
      </div>
    </div>
  );
};
