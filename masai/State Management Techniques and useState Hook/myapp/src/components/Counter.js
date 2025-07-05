import React, { useState } from 'react';

const Counter= () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  const btnStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer'
};


  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
      <h2>Simple Counter App</h2>
      <h1>{count}</h1>
      {count === 10 && <p style={{ color: 'green', fontWeight: 'bold' }}>Goal Reached!</p>}

      <div style={{ marginTop: '20px' }}>
        <button onClick={increment} style={btnStyle}>Increment</button>
        <button onClick={decrement} style={btnStyle}>Decrement</button>
        <button onClick={reset} style={btnStyle}>Reset</button>
      </div>
    </div>
  );
};


export default Counter;
