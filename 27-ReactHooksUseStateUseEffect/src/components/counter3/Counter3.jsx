import React, { useState } from 'react';
import './Counter3.css';

const RetroCounter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const adjustInc = () => setCount(count + 1);
  const adjustDec = () => {
    if (count > 0) setCount(count - 1);
  };

  const adjustMultiInc = () => {
    const value = parseInt(inputValue) || 0;
    if (value > 0) setCount(count + value);
  };

  const adjustMultiDec = () => {
    const value = parseInt(inputValue) || 0;
    if (count - value >= 0) setCount(count - value);
  };

  const resetAll = () => {
    setCount(0);
    setInputValue("");
  };

  return (
    <div className="atari_container">
      <div className="atari_display">
        <span>{count}</span>
      </div>

      <div className="atari_buttons">
        <button onClick={adjustInc}>+</button>
        <button onClick={adjustDec}>-</button>
      </div>

      <div className="atari_step">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={adjustMultiInc}>+</button>
        <button onClick={adjustMultiDec}>-</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default RetroCounter;
