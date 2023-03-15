import { useEffect } from "react";

//CleanUp Component
const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중....");
    }, 1000);

    // return () => {
    //   clearInterval(timer);
    //   console.log("타이머가 종료되었습니다.");
    // };
  }, []);

  return (
    <div>
      <h2>타이머가 시작됩니다. console.log를 보세요!</h2>
    </div>
  );
};

export default Timer;
