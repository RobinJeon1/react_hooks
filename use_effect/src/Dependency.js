import { useState, useEffect } from "react";

//Dependency Component
const Dependency = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //렌더링 될 때 마다 매번 실행됨
  useEffect(() => {
    console.log("랜더링!");
  });

  //defendency array
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  useEffect(() => {
    console.log("마운팅!");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <h2>count: {count}</h2>
      <input type="text" value={name} onChange={handleInputChange} />
      <h2>name: {name}</h2>
    </div>
  );
};

export default Dependency;
