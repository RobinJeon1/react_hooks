import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

// const Footer = ({ isDark, setIsDark }) => {
//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };
//   return (
//     <footer
//       className="footer"
//       style={{
//         backgroundColor: isDark ? "black" : "lightgray",
//       }}
//     >
//       <button className="button" onClick={toggleTheme}>
//         Darkmode
//       </button>
//     </footer>
//   );
// };

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Darkmode
      </button>
    </footer>
  );
};

export default Footer;
