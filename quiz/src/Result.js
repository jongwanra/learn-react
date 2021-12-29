import React from 'react';
import { useSelector } from 'react-redux';

const Result = (props) => {
  const { answer, user_answer } = useSelector((state) => state.quiz);
  let score = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === user_answer[i]) {
      score += Math.round(100 / answer.length);
    }
  }
  return <div>나종완에 대해 아는 점수는! {score}</div>;
};

export default Result;
