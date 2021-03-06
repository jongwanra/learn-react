import React from 'react';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
import styled from 'styled-components';
import Detail from './Detail';
import Progress from './Progress';
import Spinner from './Spinner';

import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBucket,
  loadBucketFB,
  addBucketFB,
} from './redux/modules/bucket';
import { db } from './firebase';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
} from 'firebase/firestore';

function App() {
  const [list, setList] = React.useState([
    '영화관 가기',
    '매일 책읽기',
    '수영 배우기',
  ]);
  const text = React.useRef(null);
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.bucket.is_loaded);

  React.useEffect(async () => {
    dispatch(loadBucketFB());
  }, []);

  const addBucketList = () => {
    dispatch(addBucketFB({ text: text.current.value, completed: false }));
  };

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress />
        <Line />
        <Switch>
          <Route path="/detail/:index" exact>
            <Detail />
          </Route>
          <Route path="/" exact>
            <BucketList list={list} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>

      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
      {!is_loaded && <Spinner />}
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  & > * {
    padding: 5px;
  }
  & input {
    border: 1px solid #888;
    width: 70%;
    margin-right: 10px;
  }
  & input:focus {
    /* input은 기본적으로 outline이 존재한다. */
    outline: none;
    border: 1px solid #a673ff;
  }

  & button {
    width: 25%;
    color: #fff;
    border: #a673ff;
    background-color: #a673ff;
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
