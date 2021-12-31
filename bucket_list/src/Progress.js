import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);
  let count = 0;
  bucket_list.map((value, index) => {
    if (value.completed === true) {
      count++;
    }
  });
  const percentage = `${(count / bucket_list.length) * 100}%`;
  return (
    <ProgressBar>
      <Highlight width={percentage} />
      <Dot />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  width: 100%;
  height: 20px;
  border-radius: 10px;
`;

const Highlight = styled.div`
  background-color: #a673ff;
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  border: 5px solid #673ab7;
  margin-left: -20px;
`;

export default Progress;
