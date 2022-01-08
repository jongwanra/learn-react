import React, { useState } from 'react';
import store from '../store';

const AddNumber = (props) => {
  const [size, setSize] = useState('0');

  const onClick = () => {
    console.log('size When on Click!:', size);
    store.dispatch({ type: 'INCREMENT', size: parseInt(size) });
  };
  return (
    <div>
      <h1>Add Number</h1>
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <input type="button" value="+" onClick={onClick} />
    </div>
  );
};

export default AddNumber;
