import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <Page isDark={isDark} setIsDark={setIsDark} />
      {/* <ThemeContext.Provider value={{ isDark, setIsDark }}> */}
      {/* <Page /> */}
      {/* </ThemeContext.Provider> */}
    </div>
  );
};

export default App;
