import React from 'react';
// import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/button';

import { updateBucketFB, deleteBucketFB } from './redux/modules/bucket';
const Detail = (props) => {
  const params = useParams();
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteDetailPage = () => {
    dispatch(deleteBucketFB(bucket_list[params.index].id));
    history.goBack();
  };

  const updateDetailPage = () => {
    dispatch(updateBucketFB(bucket_list[params.index].id));
    history.goBack();
  };
  return (
    <>
      <div>
        {bucket_list[params.index].text ? bucket_list[params.index].text : ''}
        상세페이지입니다.
      </div>
      <Button variant="outlined" color="secondary" onClick={deleteDetailPage}>
        삭제하기
      </Button>
      <Button variant="outlined" color="primary" onClick={updateDetailPage}>
        완료하기
      </Button>
    </>
  );
};

export default Detail;
