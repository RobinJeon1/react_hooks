import { useState, useEffect, useCallback } from "react";

/** App Component */
function App() {
  const [number, setNumber] = useState(0);

  //button onClick
  const someFunction = () => {
    console.log(`someFunc: number: ${number}`);
    return;
  };

  /** useCallback 사용 */
  // const someFunction = useCallback(() => {
  //   console.log(`someFunction: number: ${number}`);
  //   return;
  // }, [number]);

  //input onChange
  const handleInput = (e) => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input type="number" value={number} onChange={handleInput} />
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;
