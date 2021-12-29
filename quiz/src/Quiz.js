import React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAnswer } from './redux/modules/quiz';

const Quiz = (props) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.quiz);
  console.log('questions:', questions);

  const pressO = () => {
    const pageNum = params.index;
    dispatch(addUserAnswer(true));
    if (pageNum <= 1) {
      history.push('/quiz/' + (parseInt(pageNum) + 1));
    } else {
      history.push('/result');
    }
  };

  const pressX = () => {
    const pageNum = params.index;
    dispatch(addUserAnswer(false));
    if (pageNum <= 1) {
      history.push('/quiz/' + (parseInt(pageNum) + 1));
    } else {
      history.push('/result');
    }
  };

  return (
    <>
      <Image />
      <h1>{parseInt(params.index) + 1}번째 문제</h1>
      <p>{questions[params.index]}</p>
      <div>
        <button onClick={pressO}>O</button>
        <button onClick={pressX}>X</button>
      </div>
    </>
  );
};

const Image = styled.image`
  display: block;
  border-radius: 16px;
  border: none;
  background-color: blueviolet;
  width: 90%;
  margin: 0 auto;
  margin-top: 15px;
  height: 60%;
`;

export default Quiz;
