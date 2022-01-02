import React from 'react';
import Post from '../components/Post';

const PostList = (props) => {
  return (
    <React.Fragment>
      <h1>목록 페이지</h1>
      <Post />
    </React.Fragment>
  );
};

export default PostList;
