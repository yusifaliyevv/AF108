import { useState } from "react";
import "./Counter.css";

const Counter = () => {
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

  const txtEmotes = () => {
    if (count <= 25) return "(◡︵◡)";
    if (count >= 25 && count <= 50) return "(ー_ーゞ";
    if (count >= 50 && count <= 75) return "(Ծ_Ծ ";
    if (count >= 75 && count <= 100) return "(•‿•)";
    if (count >= 100) return "(＾▽＾)";
  };

  return (
    <div className="container">
      <div className="count">{count}</div>
      <div className="txtEmote">{txtEmotes()}</div>

      <div className="btns">
        <button onClick={adjustDec}>-1</button>
        <button onClick={resetAll}>reset</button>
        <button onClick={adjustInc}>+1</button>
      </div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="multi_input"
      />
      <div className="btns_tw">
        <button onClick={adjustMultiDec}>-</button>
        <button onClick={adjustMultiInc}>+</button>
      </div>
    </div>
  );
};

export default Counter;
