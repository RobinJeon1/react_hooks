import { useState, useRef } from "react";

//CountRef Component
const VariableVsUseRef = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var: ", countVar);
  };

  return (
    <div>
      <h2>Ref: {countRef.current}</h2>
      <h2>Var: {countVar}</h2>
      <button onClick={doRendering}>Render</button>
      <button onClick={increaseRef}>Ref +</button>
      <button onClick={increaseVar}>Var +</button>
    </div>
  );
};

export default VariableVsUseRef;
