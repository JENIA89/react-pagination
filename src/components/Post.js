import React from 'react';

export const Post = ({ posts, loading }) => {
  if (loading) <h2>loading ...</h2>;
  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};
