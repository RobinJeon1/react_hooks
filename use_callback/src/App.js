import { useState, useEffect, useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);

  // const someFunction = () => {
  //   console.log(`someFunc: number: ${number}`);
  //   return;
  // };
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

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
