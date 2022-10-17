
import './App.css';

import { React, useState } from 'react'
 
export default function App() {
  const [counter, setCounter] = useState(0);
 
  const increase = () => {
    setCounter(count => count + 1);
  };
 
   const decrease = () => {
    
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };
  
  
 
  return (
    <div className="counter">
      <h1>Counter</h1>
      <span className="counterResult">{counter}</span>
      <div>
        <button className="buttonClick" onClick={increase}>+</button>
        <button className="buttonClick" onClick={decrease}>-</button>
      </div>
    </div>
  );
}
