// Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1 style={{textAlign:"center", backgroundColor:"green"}}>Counter App</h1>
      <h2 style={{textAlign:"center"}}>{count}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }} >
        <button style={{cursor:"pointer"}} onClick={increment}>+ Increment</button>
        <button style={{cursor:"pointer"}} onClick={decrement}>- Decrement</button>
      </div>
    </div>
  );
};

export default Counter; // Export the Counter component to use it in other files
