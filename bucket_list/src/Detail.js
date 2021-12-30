import React from 'react';
// import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBucket, updateBucket } from './redux/modules/bucket';
const Detail = (props) => {
  const params = useParams();
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteDetailPage = () => {
    dispatch(deleteBucket(bucket_list[params.index]));
    history.goBack();
  };

  const updateDetailPage = () => {
    dispatch(updateBucket(params.index));
    history.goBack();
  };
  return (
    <>
      <div>{bucket_list[params.index].text} 상세페이지입니당! </div>
      <button onClick={deleteDetailPage}>삭제하기</button>
      <button onClick={updateDetailPage}>완료하기</button>
    </>
  );
};

export default Detail;
