import React, { useState, useRef } from 'react';

const Gugudan = (props) => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef();

  const onClick = () => {
    const answer = first * second;
    // 정답인 경우
    if (answer === parseInt(value)) {
      setResult(`${first} * ${second} = ${answer} 정답!`);
    } else {
      setResult(`${first} * ${second} = ${answer} 땡!`);
    }
    setFirst(Math.ceil(Math.random() * 9));
    setSecond(Math.ceil(Math.random() * 9));
    setValue('');
    inputRef.current.focus();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <React.Fragment>
      <p>
        {first} 곱하기 {second}는 ?
      </p>
      <div>
        <input ref={inputRef} value={value} onChange={onChange} />
        <button onClick={onClick}>입력!</button>
      </div>
      <p>{result}</p>
    </React.Fragment>
  );
};

export default Gugudan;
