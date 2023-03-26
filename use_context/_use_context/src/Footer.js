import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Footer = () => {
  const context = useContext(ThemeContext);

  const toggleTheme = () => {
    context.setIsDark(!context.isDark);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: context.isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark / Light mode
      </button>
    </footer>
  );
};

export default Footer;
