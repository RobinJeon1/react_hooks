import { useState } from "react";
import Timer from "./Timer";

//CleanUp Component
const CleanUp = () => {
  const [showTimer, setShowTimer] = useState(false);

  const handleToggle = () => {
    setShowTimer(!showTimer);
  };

  return (
    <div>
      {showTimer ? <Timer /> : null}
      <button onClick={handleToggle}>Toggle Timer</button>
    </div>
  );
};

export default CleanUp;
