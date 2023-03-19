import { useState, useRef } from "react";

//CountRef Component
const CountRef = () => {
  const [count, setCount] = useState(0);

  // { countRef.current = 0 }
  const countRef = useRef(0);

  console.log("렌더링...");

  //countRef.current
  console.log("count ref: ", countRef);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };

  return (
    <div>
      <h2>State: {count}</h2>
      <h2>Ref: {countRef.current}</h2>
      <button onClick={increaseCountState}>State +</button>
      <button onClick={increaseCountRef}>Ref +</button>
    </div>
  );
};

export default CountRef;
