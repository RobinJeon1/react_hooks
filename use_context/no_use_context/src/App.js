import { useState } from "react";
import Page from "./Page";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <Page isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default App;
