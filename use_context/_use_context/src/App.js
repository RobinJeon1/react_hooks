import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
};

export default App;
