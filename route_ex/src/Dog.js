import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Dog = (props) => {
  const history = useHistory();
  console.log(props);
  return (
    <div
      onClick={() => {
        history.push('/dog');
      }}
    >
      강아지 화면입니다!
    </div>
  );
};

export default Dog;
