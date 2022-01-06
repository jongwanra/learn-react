import React, { useState, useRef } from 'react';
const WordRelay = (props) => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
    } else {
      setResult('땡');
      setValue('');
    }
    inputRef.current.focus();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <p>{word}</p>
      <input ref={inputRef} value={value} onChange={onChange} />
      <button onClick={onSubmit}>입력!</button>
      <p>{result}</p>
    </>
  );
};
export default WordRelay;
