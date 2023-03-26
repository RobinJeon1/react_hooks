import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const Header = () => {
  const context = useContext(ThemeContext);
  console.log("Context: ", context);

  return (
    <header
      className="header"
      style={{
        backgroundColor: context.isDark ? "black" : "lightgray",
        color: context.isDark ? "white" : "black",
      }}
    >
      <h1>Welcome Robin!</h1>
    </header>
  );
};

export default Header;
