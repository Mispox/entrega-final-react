import { useState } from "react";
import "./Count.css";

export const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count-container">
      <button
        className="btn primary"
        onClick={decrement}
        disabled={count === 0}
      >
        -
      </button>

      <p>Seleccion: {count}</p>

      <button className="btn primary" onClick={increment}>
        +
      </button>
    </div>
  );
};