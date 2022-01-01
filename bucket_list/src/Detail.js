import React from 'react';
// import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteBucket,
  updateBucketFB,
  deleteBucketFB,
} from './redux/modules/bucket';
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
      <button onClick={deleteDetailPage}>삭제하기</button>
      <button onClick={updateDetailPage}>완료하기</button>
    </>
  );
};

export default Detail;
