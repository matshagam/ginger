import React from 'react';
import { RoomContext } from '../../store/store.jsx';

export const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <RoomContext.Consumer>
        {({ post }) => (
          <div className="blog-container">
            {post.map((post, index) => {
              return (
                <div className={`post post-${index}`} key={index}>
                  <img src={post.image} alt="blog" />
                  <p className="post-title">{post.title}</p>
                  <p className="post-date">{post.date}</p>
                  <p className="post-text">{post.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </RoomContext.Consumer>
    </div>
  );
};
