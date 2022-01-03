import React from 'react';
import { Grid, Image, Text } from '../elements/index';
const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>

        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
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
