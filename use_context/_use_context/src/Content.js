import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Content = () => {
  const context = useContext(ThemeContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: context.isDark ? "black" : "white",
        color: context.isDark ? "white" : "black",
      }}
    >
      <p>Robin님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;
