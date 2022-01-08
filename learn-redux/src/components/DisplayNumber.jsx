import React, { useState } from 'react';
import store from '../store';
const DisplayNumber = (props) => {
  const [number, setNumber] = useState(0);

  store.subscribe(() => setNumber(store.getState().number));

  return (
    <div>
      <h1>Display Number</h1>
      <p>{number}</p>
    </div>
  );
};

export default DisplayNumber;
