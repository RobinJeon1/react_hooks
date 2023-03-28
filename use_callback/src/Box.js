import { useState, useEffect } from "react";

//Box Component
const Box = ({ createBoxStyle }) => {
  //Box의 style state
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스 사이즈 조절");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
};

export default Box;
