import React, { useState, useRef } from 'react';
import './App.css';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
import styled from 'styled-components';

const App = () => {
  const [list, setList] = useState([
    '리덕스 공부',
    '노래방 가기',
    '소주 한잔~!',
  ]);
  const inputRef = useRef();

  const addList = () => {
    const tmp = inputRef.current.value;
    if (tmp !== '') {
      setList([...list, tmp]);
      inputRef.current.value = '';
    }
  };
  return (
    <div>
      <Container>
        <Title> 내 버킷 리스트</Title>
        <Line />
        <BucketList list={list} />
      </Container>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={addList}>추가하기</button>
      </div>
    </div>
  );
};

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slaateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
