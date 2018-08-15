import React from 'react';
import { Context } from '../../../store/store.jsx';

export const Post = () => {
  return (
    <Context.Consumer>
      {({ post }) => (
        <React.Fragment>
          {post.map(post => {
            return (
              <div className={`post post-${post.id}`} key={post.id}>
                <img src={post.image} alt="blog" />
                <p className="post-title">{post.title}</p>
                <p className="post-date">{post.date}</p>
                <p className="post-text">{post.text}</p>
              </div>
            );
          })}
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};
