import { useState } from "react";

//무거운 작업
const heavyWork = () => {
  console.log("엄청 무거운 작업!!");
  return ["Robin", "sam"];
};

//UpdateList Component
const UpdateList = () => {
  const [names, setNames] = useState(["Robin", "Sam"]);

  // useState의 인자로 callback 함수를 넣어주면,
  // Component가 처음 랜더링 될때에만 실행한다. (무거운 작업이 있을 시 활용)
  // const [names, setNames] = useState(() => {
  //   return heavyWork();
  // });

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    //변경해야 하는 state가 이전 state값과 관계가 있다면,
    //setState함수 인자에 callback 함수를 넣어주고,
    //callback 함수 인자에 이전 state값을 받아 사용 할 수 있다.
    setNames((prevState) => {
      console.log("이전 state : ", prevState);
      // 기존 배열에 새로운 값 추가
      return [input, ...prevState];
    });
  };

  console.log("input: ", input);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default UpdateList;
