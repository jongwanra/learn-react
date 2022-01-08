import React, { useEffect, useState } from 'react';

const RSP = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('before count:', count);
    return () => {
      console.log('after count: ', count);
    };
  }, [count]);

  const onClick = () => {
    setCount((prevState) => {
      console.log('prevState:', prevState);
      return prevState + 1;
    });
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={onClick}>증가!</button>
    </>
  );
};
export default RSP;
