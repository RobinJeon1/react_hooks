import { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef();

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("inputRef: ", inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default InputFocus;
