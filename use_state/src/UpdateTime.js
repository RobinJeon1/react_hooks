import { useState } from "react";

//UpdateTime Component
const UpdateTime = () => {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    setTime(time + 1);
  };

  return (
    <div>
      <h1>현재 시각: {time}시</h1>
      <button onClick={handleClick}>update</button>
    </div>
  );
};

export default UpdateTime;
