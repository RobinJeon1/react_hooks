import { useState } from "react";

//무거운 작업
const heavyWork = () => {
  console.log("엄청 무거운 작업!!");
  return ["Robin", "sam"];
};

//UpdateList Component
const UpdateList = () => {
  //const [names, setNames] = useState(["Robin", "Sam"]);
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state : ", prevState);
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
