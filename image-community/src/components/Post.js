import React from 'react';
import Grid from '../elements/Grid';
const Post = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <div>
          <div>user profile / user name / insert_dt / is_me (edit btn)</div>
          <div>contents</div>
          <div>image</div>
          <div>comment cnt</div>
        </div>
      </Grid>
    </React.Fragment>
  );
};
// props가 없어서 생기는 오류에 대한 방지를 위한 디폴트 props값을 줌
Post.defaultProps = {
  user_info: {
    user_name: 'jongwan',
    user_profile:
      'https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg',
  },
  image_url:
    'https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg',
  contents: 'beautiful React',
  comment_cnt: 10,
  insert_dt: '2022-01-03 01:29:00',
};

export default Post;
