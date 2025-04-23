import { useEffect, useState } from "react";
import "./Counter2.css";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [flipping, setFlipping] = useState(false);

  const adjustInc = () => {
    setCount(count + 1);
    setFlipping(true);
  };
  const adjustDec = () => {
    if (count > 0) setCount(count - 1);
    setFlipping(true);
  };

  const adjustMultiInc = () => {
    const value = parseInt(inputValue) || 0;
    if (value > 0) setCount(count + value);
    setFlipping(true);
  };

  const adjustMultiDec = () => {
    const value = parseInt(inputValue) || 0;
    if (count - value >= 0) setCount(count - value);
    setFlipping(true);
  };

  const resetAll = () => {
    setCount(0);
    setInputValue("");
    setFlipping(true);
  };

  useEffect(() => {
    if (flipping) {
      const timer = setTimeout(() => setFlipping(false), 500);
      return () => clearTimeout(timer);
    }
  }, [flipping]);

  return (
    <div className="container_tw">
      <div className={`counter_card ${flipping ? "flip" : ""}`}>
        <p className="number">{count}</p>
      </div>

      <div className="buttons">
        <button onClick={adjustDec}>-1</button>
        <button onClick={resetAll}>reset</button>
        <button onClick={adjustInc}>+1</button>
      </div>

      <div className="input_area">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={adjustMultiDec}>-</button>
        <button onClick={adjustMultiInc}>+</button>
      </div>
    </div>
  );
};

export default Counter2;
