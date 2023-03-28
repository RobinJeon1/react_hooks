import { useMemo, useState } from "react";

//어려운 계산
const hardCalculate = (number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 2000000000; i++) {} // 계산하는 시간
  return number + 10000;
};

//쉬운 계산
const easyCalculate = (number) => {
  console.log("쉬운 계산!");
  return number + 1;
};

/** App Component */
function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);
  // const hardSum = useMemo(() => {
  //   return hardCalculate(hardNumber);
  // }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  const HardhandlerInput = (e) => {
    setHardNumber(parseInt(e.target.value));
  };

  const EasyhandlerInput = (e) => {
    setEasyNumber(parseInt(e.target.value));
  };

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input type="number" value={hardNumber} onChange={HardhandlerInput} />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input type="number" value={easyNumber} onChange={EasyhandlerInput} />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default App;
