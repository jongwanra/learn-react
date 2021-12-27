// import logo from './logo.svg';
import React from 'react';
import './App.css';

function addCard(text) {
  const cards = document.getElementsByClassName('todo');
  console.log(cards);
  cards[0].appendChild(
    <div style={{ border: '1px solid #eee', width: '200px', height: '200px' }}>
      <h2>{text}</h2>
      <button>완료</button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h1 className="todo">오늘 할일</h1>
      {addCard('머야')}
      <input />
      <button onClick={addCard}>추가하기</button>
    </div>
  );
}
export default App;
