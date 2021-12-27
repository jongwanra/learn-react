import React from 'react';

const Nemo = (props) => {
  const [count, setCount] = React.useState(3);
  console.log(count, setCount);
  const nemo_count = Array.from({ length: count }, (v, i) => i);

  const addNemo = () => {
    setCount(count + 1);
  };

  const removeNemo = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('not nemo!');
    }
  };
  return (
    <>
      {nemo_count.map((v, i) => {
        return (
          <div
            key={i}
            style={{
              width: '150px',
              height: '150px',
              backgroundColor: '#dddddd',
              margin: '10px',
            }}
          >
            nemo
          </div>
        );
      })}
      <div>
        <button onClick={addNemo}>하나 추가</button>
        <button onClick={removeNemo}>하나 빼기</button>
      </div>
    </>
  );
};
export default Nemo;
