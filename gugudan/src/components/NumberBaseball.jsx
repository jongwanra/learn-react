import React, { useRef, useState } from 'react';
import Try from './Try';
const NumberBaseball = (props) => {
  // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const getNumbers = () => {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];

    for (let i = 0; i < 4; i += 1) {
      const chosen = candidate.splice(
        Math.floor(Math.random() * (9 - i)),
        1
      )[0];
      array.push(chosen);
    }

    return;
  };
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputRef = useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmitForm = (e) => {
    if (value === answer.join('')) {
      setResult('홈런!');
      setTries([...tries, {}]);
    } else {
    }
  };
  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} maxLength={4} value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try index={i} value={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseball;
