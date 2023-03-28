import { useCallback, useState } from "react";
import Box from "./Box";

//App2 Component
const App2 = () => {
  //Box size state
  const [size, setSize] = useState(200);
  //Theme state
  const [isDark, setIsDark] = useState(false);

  //css style객체를 return하는 함수
  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: "green",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };
  /** useCallback 사용 */
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "green",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  //input에 적힌 숫자에 따라 size state 변경
  const changeSize = (e) => {
    setSize(e.target.value);
  };

  //Theme state 변경
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input type="number" value={size} onChange={changeSize} />
      <button onClick={changeTheme}>Change Theme</button>
      <hr />
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default App2;
