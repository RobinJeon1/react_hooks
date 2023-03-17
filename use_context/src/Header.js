import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

// const Header = ({ isDark }) => {
//   return (
//     <header
//       className="header"
//       style={{
//         backgroundColor: isDark ? "black" : "lightgray",
//         color: isDark ? "white" : "black",
//       }}
//     >
//       <h1>Welcome 홍길동!</h1>
//     </header>
//   );
// };

const Header = () => {
  const { isDark } = useContext(ThemeContext);

  console.log("isDark: ", isDark);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  );
};

export default Header;
