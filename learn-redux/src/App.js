import React, { useState } from 'react';
import { AddNumberRoot, DisplayNumberRoot } from './components/index';
import './App.css';

function App() {
  const [number, setNumber] = useState(2);
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot number={number} />
    </div>
  );
}

export default App;
