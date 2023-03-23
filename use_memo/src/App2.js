import { useEffect, useMemo, useState } from "react";

function App2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //const location = isKorea ? "한국" : "외국";
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  // {
  //   country: isKorea ? "한국" : "외국",
  // };

  const handleInput = (e) => {
    setNumber(e.target.value);
  };

  const handleToggle = () => {
    setIsKorea(!isKorea);
  };

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={number} onChange={handleInput} />
      <hr />
      <h2>어느 나라에 있나요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={handleToggle}>여행가자</button>
    </div>
  );
}

export default App2;
