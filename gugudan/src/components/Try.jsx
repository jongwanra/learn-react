import React from 'react';

const Try = (props) => {
  const { tryInfo } = props;
  return (
    <>
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    </>
  );
};

export default Try;
