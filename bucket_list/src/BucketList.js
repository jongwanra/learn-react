// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BucketList = (props) => {
  let history = useHistory();
  const my_lists = useSelector((state) => {
    console.log('state:', state);
    return state.bucket.list;
  });
  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            completed={list.completed}
            className="list_item"
            key={index}
            onClick={() => {
              history.push('/detail/' + index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 50vh;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${(props) => (props.completed ? 'orange' : 'aliceblue')};
`;

export default BucketList;
